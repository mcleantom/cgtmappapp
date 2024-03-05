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
          height: "25px",
          top: "-12px",
          left: "-5px",
          position: "relative",
          borderBottom: "1px solid rgb(187, 187, 187)",
          borderLeft: "1px solid rgb(187, 187, 187)",
          zIndex: "99",
        }}
      ></div>
  )
}


function TreeItem({ company, selectCompany }) {
  return (
    <>
    <div style={{display: "flex", alignItems: "left", cursor: "pointer"}} onClick={() => selectCompany(company, 15)}>
      <TreeIcon />
      <Text fontSize="sm" noOfLines={1} flex={1} align={"left"}>
        {company.name}
      </Text>
    </div>
    </>
  );
}

function TreeMain({companies, selectCompany}) {
  return (
    <>
    <div style={{overflow: "", paddingLeft: '10px', paddingTop:'5px'}}>
      {companies && companies.map && companies.map((company) => {
        return <TreeItem company={company} selectCompany={selectCompany} />;
      })}
    </div>
    </>
  );
}

function TreeSection({ title, companies, selectCompany }) {
  return (
    <>
      <TreeHeader category={{ name: title }} />
      <TreeMain companies={companies} selectCompany={selectCompany} />
    </>
  );
}

export default function CompanyTree({ tree, selectCompany }) {
  return (
    <>
      {Object.entries(tree).map(([key, value]) => {
        return (
        <>
          <TreeSection title={key} companies={tree[key]} selectCompany={selectCompany} />
        </>
        )
      })}
    </>
  );
}
