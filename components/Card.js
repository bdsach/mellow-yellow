import {
    Box,
    Flex,
    Stack,
    Heading,
    Text
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import CalcReadingTime from "@/lib/minuteRead";
import { Readmore } from "@/components/ReadMore";

export const CommonCard = ({ post }) => {
    const {
        title,
        excerpt,
        publishedAt,
        slug,
        thumbnail: { url: thumbnail },
        categories: { name: categoryName, slug: categorySlug },
    } = post;
    return (
        <Box
            w="full"
            borderColor="light.800"
            boxShadow="xs"
        >
            <Box
                position="relative"
                height="180px"
                overflow="hidden"
            >
                <NextImage
                    src={thumbnail}
                    layout="fill"
                    alt={title}
                    position="absolute"
                    objectFit="cover"
                />
            </Box>
            <Stack p={3}>
                <Flex
                    gap={2}
                    fontSize="xs"
                    justifyContent="space-between"
                >
                    <NextLink href={`/category/${categorySlug}`}>
                        <a>
                            <Text
                                textTransform="uppercase"
                                fontWeight="semibold"
                                fontFamily="monospace"
                                color="primary.500"
                                _hover={{
                                    color: "primary.200"
                                }}
                            >
                                {categoryName}

                            </Text>
                        </a>
                    </NextLink>
                    <Text color="light.200">
                        <CalcReadingTime date={publishedAt} />
                    </Text>
                </Flex>
                <NextLink href={`/post/${slug}`}>
                    <a>
                        <Heading
                            as="h2"
                            fontWeight="bold"
                            fontSize="xl"
                            fontFamily="heading"
                            noOfLines={2}
                        >
                            {title}
                        </Heading>
                    </a>
                </NextLink>
                <Text fontSize="sm" noOfLines={3} color="light.500">{excerpt}</Text>
            </Stack>
        </Box >
    );
};



export const WideCard = ({ post }) => {

    const { title, excerpt, slug,
        thumbnail: { url: thumbnail },
        categories: { name: categoryName, slug: categorySlug },
        createdBy: { name: createdBy }
    } = post[0];

    return (
        <Box
            boxShadow="xs"
        >
            <Flex>
                <Stack
                    w="55%"
                    spacing={5}
                    pt={8}
                    px={10}
                >
                    <Heading size="lg"> {title}</Heading>
                    <Text fontSize="md" color="light.100" noOfLines={2}> {excerpt} </Text>
                    <Flex justifyContent="space-between" >
                        <Text fontSize="sm" color="light.100">by {createdBy}</Text>
                        <Readmore url={`/post/${slug}`} text="read more" />
                    </Flex>
                </Stack>

                <Box
                    w="45%"
                    h="250px"
                    position="relative"
                >
                    <NextImage src={thumbnail} layout="fill" objectFit="cover" />
                </Box>
            </Flex>
        </Box>
    );
};


export const Big = ({ post }) => {

    const { title, excerpt,
        thumbnail: { url: thumbnail },
        categories: { name: categoryName, slug: categorySlug },
        createdBy: { name: createdBy }
    } = post[0];

    return (
        <Flex
            alignItems="center"
            bgColor="gray.50"
        >
            <Stack
                w="50%"
                p={10}
                spacing={5}
            >
                <Heading> {title} </Heading>
                <Text color="light.100"> {excerpt} </Text>
            </Stack>
            <Box
                w="50%"
            >
                <Box
                    position="relative"
                    w="full"
                    h="400px"
                >
                    <NextImage src={thumbnail} layout="fill" objectFit="cover" />
                </Box>
            </Box>
        </Flex >
    );
};
