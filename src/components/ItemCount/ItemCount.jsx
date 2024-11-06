import { useEffect, useState, useRef } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

export const ItemCount = () => {
    const [state, setState] = useState(0);

    const handLeAdd = () => {
        setState(state + 1);
    };

    const handleRemove = () => {
        setState(state - 1);
    };

    useEffect(() => {
        console.log("useEffect con dependencias vacias");
    }, []
    );

    return (
        <Flex>
            <Button onclick={handleRemove}>-</Button>
            <Text>{state}</Text>
            <Button onclick={handleAdd}>+</Button>
        </Flex>
    );
};

