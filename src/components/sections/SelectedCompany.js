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
        alt="Caffe Latte"
      />
      <CardBody paddingBottom={"0px"}>
        <Heading size="sm">{company.name}</Heading>
        <Text size="sm" maxHeight="200px" overflowY="auto">
          {company.description}
        </Text>
      </CardBody>
      <CardFooter padding={4}>
        <Link href={company.website}>
          <Button variant="solid" colorScheme="blue">
            Website
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
