import { Box, Flex, Heading, Text } from "@chakra-ui/react";


export default function ExpenseView({ type, data }) {

    // console.log(type)
    console.log(data)
    return (
        <Box
            flex={1}
            w={"full"}
            bg={"white"}
            mr={4}
            mt={10}
            p={5}
            pb={4}
            border={'1px solid'}
            borderColor={'gray.100'}
            borderRadius={12}
        >
            <Heading
                size={'md'}
                color={'red.700'}
            >
                {
                    type === 'income' ? "Income" : 'Expense'
                }
            </Heading>
            <Flex
                justifyContent={"space-between"}
                alignItems={'center'}
            >

                <Flex
                    flexDirection={'column'}
                >
                    {
                        data.map((item, index) =>
                            <Flex
                                flex={1}
                                bg={type === 'expense' ? 'red.50' : 'blue.50'}
                                mt={4}
                                justifyContent={"space-between"}
                                alignItems={'center'}
                                border={'1px solid'}
                                borderColor={type === 'expense' ? 'red.100' : 'blue.100'}
                                p={4}
                                borderRadius={8}
                                w={'full'}
                            >
                                <Flex
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                >
                                    <Text
                                        ml={3}
                                        fontWeight={"bold"}
                                        color={'gray.600'}
                                    >
                                        {item.description}
                                    </Text>
                                </Flex>
                                <Text>
                                    $ {item.amount}
                                </Text>
                            </Flex>

                        )
                    }
                </Flex>

            </Flex>
        </Box>
    );
}