import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Drawer } from '@mui/material';
import { useRouter } from "next/router"


const DrawerContainer = ({ children, drawerPaperClassName, onClick, onClose }) => {
    const router = useRouter();
    const { pathname } = router;

    const currentPath = useRef(null);
    const [ open, setOpen ] = useState(false);

    const childrenMemo = useMemo(() => children, [ children ])

    const openHandler = useCallback(() => setOpen(true), []);
    const closeHandler = useCallback(() => setOpen(false), []);

    useEffect(() => {
        if(onClick) onClick.current = openHandler;
    }, [ openHandler, onClick ]);

    useEffect(() => {
        if(onClose) onClose.current = closeHandler;
    }, [ closeHandler, onClose ]);

    useEffect(() => {
        if(pathname !== currentPath.current) {
            setOpen(false);
            return;
        }
        currentPath.current = pathname;
    }, [ pathname ]);

    return (
        <Drawer
            anchor="right" 
            open={open} 
            onClose={closeHandler} 
            classes={{ paper: drawerPaperClassName }}>
            { childrenMemo }
        </Drawer>
    );
};

export default DrawerContainer;