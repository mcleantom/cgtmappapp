import { useState } from "react";
import { Text } from "@chakra-ui/react";
function TreeHeader({ category }) {
  return (
    <>
      <Text fontWeight={"bold"}>{category.name}</Text>
    </>
  );
}

function TreeSection({ title, companies }) {
  return (
    <>
      <TreeHeader category={{ name: title }} />
      {companies.map((company) => {
        return (
          <>
            <Text fontSize={"sm"}>|- {company.name}</Text>
          </>
        );
      })}
    </>
  );
}

export default function CompanyTree({ tree }) {
  return (
    <>
      {Object.entries(tree).map(([key, value]) => {
        return <TreeSection title={key} companies={tree[key]} />;
      })}
    </>
  );
}
