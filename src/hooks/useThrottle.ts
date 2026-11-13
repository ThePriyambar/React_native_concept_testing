import {useCallback , useRef} from 'react';
export function useThrottle<T extends (...args: any[]) => void>(
    callback: T,
    delay: number = 1000,
) {
    const lastExecution = useRef(0);
    return useCallback(
        (...args: Parameters<T>) => {
            const now = Date.now();
            if (now - lastExecution.current >= delay) {
                lastExecution.current = now
            }
        },
        [callback, delay]
    );
}