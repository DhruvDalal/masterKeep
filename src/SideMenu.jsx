import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
function Sidemenu() {
    return (
        <>
            <ListItem button>
                <ListItemIcon>
                    <EmojiObjectsIcon />
                </ListItemIcon>
                <ListItemText primary="Notes" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <NotificationsNoneIcon />
                </ListItemIcon>
                <ListItemText primary="Reminders" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit labels" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary="Archive" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DeleteOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Trash" />
            </ListItem>
        </>
    )
}

export default Sidemenu;