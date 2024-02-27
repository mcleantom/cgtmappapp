import { useState } from "react";
import { Text } from "@chakra-ui/react";
function TreeHeader({ category }) {
  return (
    <>
      <Text fontWeight={"bold"}>{category.name}</Text>
    </>
  );
}

function TreeIcon() {
  /* .itemContainer::before {
    content: "";
    display: block;
    width: 12px;
    height: 32px;
    top: -16px;
    left: -16px;
    position: absolute;
    border-bottom: 1px solid rgb(187, 187, 187);
    border-left: 1px solid rgb(187, 187, 187);
    z-index: 99;
    */

  return (
      <div
        style={{
          content: "",
          display: "block",
          width: "12px",
          height: "32px",
          top: "-16px",
          left: "16px",
          position: "absolute",
          borderBottom: "1px solid rgb(187, 187, 187)",
          borderLeft: "1px solid rgb(187, 187, 187)",
          zIndex: "99",
        }}
      ></div>
  )
}


function TreeItem({ company }) {
  return (
    <>
      <TreeIcon />
      <Text fontSize={"sm"} before>{company.name}</Text>
    </>
  );
}


function TreeSection({ title, companies }) {
  return (
    <>
      <TreeHeader category={{ name: title }} />
      {companies.map((company) => {
        return <TreeItem company={company} />;
      })}
    </>
  );
}

export default function CompanyTree({ tree }) {
  return (
    <>
      {Object.entries(tree).map(([key, value]) => {
        return (
        <>
          <TreeSection title={key} companies={tree[key]} />
          <br/>
        </>
        )
      })}
    </>
  );
}
