import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Link,
} from "@chakra-ui/react";

export default function SelectedCompany({ company }) {
  return (
    <Card overflow="hidden" width={"300px"}>
      <Image
        objectFit="cover"
        height="125px"
        src={company.logo}
        alt={company.name}
      />
      <CardBody paddingBottom={"0px"}>
        <Heading size="sm">{company.name}</Heading>
        <Text size="sm" maxHeight="200px" overflowY="auto">
          {company.description}
        </Text>
      </CardBody>
      <CardFooter padding={4}>
        <Link href={company.website} width="100%">
          <Button variant="solid" colorScheme="black-btn" width="100%">
            Website
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
