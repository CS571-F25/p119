import { useState, useEffect } from 'react'

export default function useStorage(storageKey, initialData) {
    const savedData = JSON.parse(localStorage.getItem(storageKey));
    const [data, setData] = useState(savedData ? savedData : initialData);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(data));
    }, [data]);

    return [data, setData];
}