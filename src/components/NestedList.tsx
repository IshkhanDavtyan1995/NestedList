import React, { useState } from 'react';
import { Container, List } from '../styles';
import ListItem from './ListItem';

export interface IItems {
    id: number;
    name: string;
    children: any[];
    isParent?: boolean
}

const initialList = [
    { id: 1, name: 'Item 1', children: [], isParent: true },
    { id: 2, name: 'Item 2', children: [], isParent: true },
];

const addChildToItem = (items: IItems[], parentId: number, newChild: any): IItems[] => {
    return items.map(item => {
        if (item.id === parentId) {
            return { ...item, children: [...item.children, newChild] };
        } else {
            return { ...item, children: addChildToItem(item.children, parentId, newChild) };
        }
    });
};

const removeItemFromList = (items: any[], id: number): any[] => {
    return items.reduce((acc, item) => {
      if (item.id !== id) {
        const filteredChildren = removeItemFromList(item.children, id);
        acc.push({ ...item, children: filteredChildren });
      }
      return acc;
    }, []);
  };
  

const NestedList: React.FC = () => {
    const [items, setItems] = useState<IItems[]>(initialList);

    const addChild = (parentId: number) => {
        const name = prompt('Enter child name:');
        if (name) {
            const newChild = { id: Date.now(), name, children: [] };
            setItems(prevItems => addChildToItem(prevItems, parentId, newChild));
        }
    };

    const removeItem = (id: number) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
          setItems(prevItems => removeItemFromList(prevItems, id));
        }
      };

    return (
        <Container>
            <h1>Nested List</h1>
            <List>
                {items.map(item => (
                    <ListItem
                        key={item.id}
                        item={item}
                        addChild={addChild}
                        removeItem={removeItem}
                    />
                ))}
            </List>
        </Container>
    );
};

export default NestedList;