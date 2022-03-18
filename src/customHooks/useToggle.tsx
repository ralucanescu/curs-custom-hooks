import {useState, useCallback} from 'react';

export const useToggle = () => {
    const [state, setState] = useState<boolean>(false);

    const toggle = useCallback(():void => {
        setState((curr) => !curr)
    }, []);

    return [state, toggle] as const;
}