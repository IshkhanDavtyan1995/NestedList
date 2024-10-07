import React from 'react';
import { ListItemContainer, Button } from '../styles';
import { IItems } from './NestedList';

interface ListItemProps {
    item: IItems;
    addChild: (parentId: number) => void;
    removeItem: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, addChild, removeItem }) => {
    return (
        <ListItemContainer>
            {item.name}
            <Button onClick={() => addChild(item.id)}>Add Child</Button>
            {
                !item.isParent ?
                    <Button onClick={() => removeItem(item.id)}>Remove</Button>
                    : null
            }
            {item.children.length > 0 && (
                <ul>
                    {item.children.map(child => (
                        <ListItem
                            key={child.id}
                            item={child}
                            addChild={addChild}
                            removeItem={removeItem}
                        />
                    ))}
                </ul>
            )}
        </ListItemContainer>
    );
};

export default ListItem;