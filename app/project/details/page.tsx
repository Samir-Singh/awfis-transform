"use client";

import { Collapse, Dropdown, MenuProps, Modal, Select } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ProjectDetails = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Chair");
  const [createNewBOQ, setCreateNewBOQ] = useState(false);
  const [showSidebar, setShowSidebar] = useState({
    open: false,
    animate: false,
  });
  const [showItemDetails, setShowItemDetails] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          onClick={() => setCreateNewBOQ(true)}
          className="font-noto text-[#E91000] flex items-center gap-3 text-sm"
        >
          <Image src="/PlusPrimary.svg" width={20} height={20} alt="plus" />
          Create new BOQ
        </div>
      ),
      key: "1",
    },

    {
      label: (
        <div className="font-noto text-[#E91000] flex items-center gap-3 text-sm">
          <Image src="/Copy.svg" width={20} height={20} alt="plus" />
          Duplicate Current BOQ
        </div>
      ),
      key: "2",
    },
  ];

  return (
    <>
      <div className="sticky top-0 z-50 bg-[#FAFAFA] pb-3">
        <div className="flex bg-white items-center justify-between px-6 py-2 border-b border-[#E5E6E6]">
          <div className="flex items-center gap-3">
            <Image
              src="/ArrowRight.svg"
              width={16}
              height={16}
              alt="arrow-left"
              className="filter invert transform rotate-180 cursor-pointer"
            />

            <div>
              <div className="text-sm font-medium flex items-center gap-1">
                <p>New Floor Renovation</p>
                <Image
                  src="/PencilBlack.svg"
                  width={15}
                  height={15}
                  alt="edit-icon"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex items-center text-[#59595C] font-noto text-xs">
                <span>Antinorm Pvt. Ltd</span>
                <span className="w-4 h-4 inline-flex items-center justify-center">
                  •
                </span>
                <span>Medium Budget</span>
                <span className="w-4 h-4 inline-flex items-center justify-center">
                  •
                </span>
                <span>Modern</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded bg-[#F1F1F1] px-3 py-1">
              <p className="font-noto text-xs text-[#59595C]">
                Total Project Cost
              </p>
              <p className="text-sm font-medium">₹ 90L</p>
            </div>

            <div className="rounded bg-[#F1F1F1] px-3 py-1">
              <p className="font-noto text-xs text-[#59595C]">Cost/ Sq.ft.</p>
              <p className="text-sm font-medium">₹ 50,000</p>
            </div>

            <button className="text-white bg-primary px-5 h-9 flex items-center justify-center rounded-lg font-medium text-sm">
              Generate Quotation
            </button>
          </div>
        </div>

        <div>
          <div className="px-6 pt-2  bg-white flex items-center gap-2 border-b border-[#E5E6E6]">
            <div className="px-3 py-2 bg-[#FEF5F4] text-primary flex items-center gap-2 text-sm border-b-2 border-primary rounded-tl rounded-tr">
              <Image src="/LockPrimary.svg" width={20} height={20} alt="lock" />
              24/02/2026_BOQ
            </div>
            <div className="px-3 cursor-pointer">
              <Dropdown
                styles={{
                  item: {
                    padding: 0,
                  },
                }}
                menu={{ items }}
                placement="bottom"
                classNames={{
                  root: "custom-dropdown",
                }}
              >
                <Image
                  src="/PlusGrey.svg"
                  width={20}
                  height={20}
                  alt="plus-icon"
                />
              </Dropdown>
            </div>
          </div>

          <div className="flex items-center mt-3 px-6 gap-2">
            <div>
              <div className="flex bg-white items-center relative rounded-lg border border-[#E5E6E6] min-w-[105px] h-8 gap-[6px] font-noto text-sm py-1 px-3 pl-2">
                Category
                <Image
                  src="/CaretDown.svg"
                  width={16}
                  height={16}
                  alt="caret-down"
                />
                <Select
                  options={[
                    {
                      value: "Zones",
                      label: "Zones",
                    },
                    {
                      value: "Category",
                      label: "Category",
                    },
                  ]}
                  popupMatchSelectWidth={false}
                  className="!absolute inset-0 opacity-0 w-full h-full"
                  classNames={{
                    popup: {
                      root: "custom-select w-[144px]",
                    },
                  }}
                  optionRender={(option) => {
                    const data = option.data as {
                      value: string;
                      label: string;
                      desc: string;
                    };

                    return (
                      <div className="p-3 font-noto text-sm text-[#59595C]">
                        <p className="text-sm">{data.label}</p>
                      </div>
                    );
                  }}
                />
              </div>
            </div>

            <div className="flex flex-1 gap-2 overflow-x-auto">
              {[
                { id: 1, name: "Chair" },
                { id: 2, name: "Kitchen Equipments" },
                { id: 3, name: "Modular Furniture" },
                { id: 4, name: "Carpet" },
                { id: 5, name: "Fire Alarm System" },
                { id: 6, name: "Lights" },
                { id: 7, name: "Raised Flooring" },
              ]?.map((item) => (
                <div
                  key={item?.id}
                  onClick={() => setSelectedTab(item?.name)}
                  className={`${item?.name === selectedTab ? "text-primary bg-[#FDEBEA]" : "bg-white border border-[#E5E6E6]"} px-2 py-1 h-8 flex items-center justify-center rounded-lg max-w-max font-noto text-sm cursor-pointer`}
                >
                  {item?.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        <Collapse
          activeKey={selectedTab}
          expandIcon={() => null}
          onChange={(key) => setSelectedTab(key?.toString() || "")}
          items={[
            {
              key: "Chair",
              label: (
                <div className="flex items-center justify-between">
                  <span>Chair</span>

                  <div className="flex items-center gap-7">
                    {selectedTab === "Chair" && (
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center w-[134px] h-9 border border-primary text-primary font-medium text-sm rounded-lg"
                      >
                        + Add Items
                      </button>
                    )}

                    <Image
                      src={
                        selectedTab === "Chair"
                          ? "/CaretUpBlack.svg"
                          : "/CaretDownBlack.svg"
                      }
                      width={14}
                      height={14}
                      alt="expand-icon"
                      className="mr-3"
                    />
                  </div>
                </div>
              ),
              children: (
                <div>
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="bg-[#FAFAFA]">
                        {[
                          { id: 1, name: "Image", width: "w-[80px]" },
                          { id: 2, name: "Sub Category", width: "w-[160px]" },
                          { id: 3, name: "Description", width: "w-[128px]" },
                          { id: 4, name: "Category" },
                          { id: 5, name: "Zone" },
                          { id: 6, name: "Size" },
                          { id: 7, name: "Units" },
                          { id: 8, name: "Quantity" },
                          { id: 9, name: "Rate Type" },
                          { id: 10, name: "Price/Unit" },
                          { id: 11, name: "Total Price" },
                          { id: 12, name: "Actions" },
                        ]?.map((item) => (
                          <th
                            className={`font-medium p-3 text-xs text-[#6D6E71] text-left ${item?.width ? item.width : ""}`}
                            key={item.id}
                          >
                            {item.name}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="text-[#231f1f] divide-y">
                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span
                            onClick={() => {
                              setShowSidebar({ animate: true, open: true });
                              setShowItemDetails(false);
                            }}
                            className="cursor-pointer text-[#346DFF] underline"
                          >
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ),
            },
          ]}
          accordion
          bordered={false}
        />

        <Collapse
          className="custom-collapse"
          activeKey={selectedTab}
          onChange={(key) => setSelectedTab(key?.toString() || "")}
          items={[
            {
              key: "Kitchen Equipments",
              label: "Kitchen Equipments",
              children: (
                <div>
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="bg-[#FAFAFA]">
                        {[
                          { id: 1, name: "Image", width: "w-[80px]" },
                          { id: 2, name: "Sub Category", width: "w-[160px]" },
                          { id: 3, name: "Description", width: "w-[128px]" },
                          { id: 4, name: "Category" },
                          { id: 5, name: "Zone" },
                          { id: 6, name: "Size" },
                          { id: 7, name: "Units" },
                          { id: 8, name: "Quantity" },
                          { id: 9, name: "Rate Type" },
                          { id: 10, name: "Price/Unit" },
                          { id: 11, name: "Total Price" },
                          { id: 12, name: "Actions" },
                        ]?.map((item) => (
                          <th
                            className={`font-medium p-3 text-xs text-[#6D6E71] text-left ${item?.width ? item.width : ""}`}
                            key={item.id}
                          >
                            {item.name}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="text-[#231f1f] divide-y">
                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ),
            },
          ]}
          accordion
          bordered={false}
          expandIcon={({ isActive }) => (
            <Image
              src={isActive ? "/CaretUpBlack.svg" : "/CaretDownBlack.svg"}
              width={14}
              height={14}
              alt="expand-icon"
            />
          )}
        />

        <Collapse
          className="custom-collapse"
          activeKey={selectedTab}
          onChange={(key) => setSelectedTab(key?.toString() || "")}
          items={[
            {
              key: "Modular Furniture",
              label: "Modular Furniture",
              children: (
                <div>
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="bg-[#FAFAFA]">
                        {[
                          { id: 1, name: "Image", width: "w-[80px]" },
                          { id: 2, name: "Sub Category", width: "w-[160px]" },
                          { id: 3, name: "Description", width: "w-[128px]" },
                          { id: 4, name: "Category" },
                          { id: 5, name: "Zone" },
                          { id: 6, name: "Size" },
                          { id: 7, name: "Units" },
                          { id: 8, name: "Quantity" },
                          { id: 9, name: "Rate Type" },
                          { id: 10, name: "Price/Unit" },
                          { id: 11, name: "Total Price" },
                          { id: 12, name: "Actions" },
                        ]?.map((item) => (
                          <th
                            className={`font-medium p-3 text-xs text-[#6D6E71] text-left ${item?.width ? item.width : ""}`}
                            key={item.id}
                          >
                            {item.name}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="text-[#231f1f] divide-y">
                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="p-3">
                          <div className="border rounded-lg w-16 h-16 relative overflow-hidden">
                            <Image
                              src="/chair.png"
                              fill
                              alt="chair-icon"
                              className="object-cover"
                            />
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Design wala, ergonomic chair
                          </span>
                        </td>

                        <td className="p-3">Green ergonomic chair</td>

                        <td className="p-3">
                          <span className="cursor-pointer text-[#346DFF] underline">
                            Chair
                          </span>
                        </td>

                        <td className="p-3">Meeting room (6 seater)</td>

                        <td className="p-3">1350 x 700 x 800</td>

                        <td className="p-3">Pcs</td>

                        <td className="p-3">
                          <div className="w-14 h-[30px] bg-[#F1F1F1] rounded-lg py-1 px-3 flex items-center text-sm">
                            6
                          </div>
                        </td>

                        <td className="p-3">Rate Contract</td>

                        <td className="p-3">₹8,940</td>

                        <td className="p-3 text-primary">₹50,940</td>

                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/PencilGrey.svg"
                                width={13}
                                height={13}
                                alt="edit"
                              />
                            </div>
                            <div className="w-6 h-6 cursor-pointer rounded flex items-center justify-center border border-[#D1D2D3]">
                              <Image
                                src="/Trash.svg"
                                width={16}
                                height={16}
                                alt="edit"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ),
            },
          ]}
          accordion
          bordered={false}
          expandIcon={({ isActive }) => (
            <Image
              src={isActive ? "/CaretUpBlack.svg" : "/CaretDownBlack.svg"}
              width={14}
              height={14}
              alt="expand-icon"
            />
          )}
        />
      </div>

      {showSidebar?.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showSidebar?.animate ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed z-[9999] top-0 left-0 right-0 bottom-0 w-full h-full"
        >
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={
              showSidebar?.animate
                ? { x: 0, opacity: 1 }
                : { x: "100vw", opacity: 0 }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ boxShadow: "0 4px 16px 0 rgba(135, 135, 135, 0.25)" }}
            className="bg-white w-[50%] h-full absolute right-0 rounded-tl-xl rounded-bl-xl border border-[#D1D2D3]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex h-full">
              <div
                onClick={() => {
                  setShowSidebar((prev) => ({ ...prev, animate: false }));
                  setTimeout(() => {
                    setShowSidebar((prev) => ({
                      ...prev,
                      open: false,
                    }));
                  }, 500);
                }}
                style={{ boxShadow: "0 4px 16px 0 rgba(135, 135, 135, 0.25)" }}
                className="absolute cursor-pointer top-10 -left-20 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#D1D2D3]"
              >
                <Image
                  src="/CrossBlack.svg"
                  width={16}
                  height={16}
                  alt="close"
                />
              </div>

              <div className="w-40 border-r border-[#D1D2D3] h-full p-4">
                <div className="w-full h-32 border border-[#D1D2D3] rounded-lg overflow-hidden relative">
                  <Image
                    src="/chair.png"
                    fill
                    alt="chair"
                    className="object-cover"
                  />
                </div>

                <div className="mt-2 font-noto">
                  <p className="text-sm font-medium">Amardeep Design</p>
                  <p className="mt-1 text-xs text-[#59595C]">Vento Mid Back</p>
                  <p className="mt-1 text-sm font-medium">₹8,490</p>
                </div>

                <div className="mt-2 w-full h-[27px] rounded-[20px] bg-[#FDEBEA] flex items-center justify-center text-xs font-medium">
                  Default Product
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pb-4">
                {!showItemDetails ? (
                  <>
                    <div className="p-4 sticky top-0 left-0 right-0 z-50 bg-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Chair & Seaters</p>
                          <p className="mt-1 font-noto text-xs text-[#929497] font-normal">
                            25 products found
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Image
                            src="/MagnifyingGlassBlack.svg"
                            width={16}
                            height={16}
                            alt="search"
                          />

                          <Image
                            src="/Funnel.svg"
                            width={16}
                            height={16}
                            alt="filter"
                          />
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-4 font-noto">
                        <div className="flex items-center gap-[6px] rounded-lg border border-[#E5E6E6] text-sm py-[6px] pl-2 pr-3">
                          <Image
                            src="/SlidersHorizontal.svg"
                            width={16}
                            height={16}
                            alt="caret-down"
                          />
                          Sort by Price
                          <Image
                            src="/CaretDown.svg"
                            width={16}
                            height={16}
                            alt="caret-down"
                          />
                        </div>

                        <div className="flex items-center gap-[6px] rounded-lg border border-[#E5E6E6] text-sm py-[6px] pl-2 pr-3">
                          Brand
                          <Image
                            src="/CaretDown.svg"
                            width={16}
                            height={16}
                            alt="caret-down"
                          />
                        </div>

                        <div className="flex items-center gap-[6px] rounded-lg border border-[#E5E6E6] text-sm py-[6px] pl-2 pr-3">
                          Colour
                          <Image
                            src="/CaretDown.svg"
                            width={16}
                            height={16}
                            alt="caret-down"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid-cols-3 gap-4 grid px-4">
                      {[
                        { id: 1 },
                        { id: 2 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                        { id: 6 },
                        { id: 7 },
                        { id: 8 },
                        { id: 9 },
                      ]?.map((item) => (
                        <div
                          key={item?.id}
                          onClick={() => setShowItemDetails(true)}
                          className="rounded-xl border border-[#D1D2D3] overflow-hidden cursor-pointer"
                        >
                          <div className="h-[138px] w-full relative">
                            <Image src="/Chair.png" fill alt="chair" />
                          </div>

                          <div className="p-3 font-noto">
                            <p className="text-xs font-medium">
                              Amardeep Design
                            </p>
                            <p className="mt-1 text-xs text-[#59595C]">
                              Tesla Mid Back
                            </p>
                            <p className="mt-1 text-sm font-medium">₹1,299</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="py-6 px-4 flex items-center sticky top-0 left-0 right-0 z-50 bg-white">
                      <Image
                        src="/ArrowLeft.svg"
                        width={20}
                        height={20}
                        alt="arrow-left"
                        className="cursor-pointer"
                        onClick={() => setShowItemDetails(false)}
                      />
                    </div>

                    <div className="px-4 font-noto">
                      <div className="w-full h-[340px] relative border border-[#D1D2D3] rounded-xl overflow-hidden">
                        <Image
                          src="/Chair.png"
                          fill
                          alt="chair"
                          className="object-fill"
                        />
                      </div>

                      <div className="mt-4 flex flex-col gap-4">
                        <div>
                          <p className="font-medium">Amardeep Design</p>
                          <p className="mt-1 text-sm text-[#575F6E]">
                            Vento Mid Back
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-[26px] h-[26px] rounded-full bg-[#414C52]"></div>
                          <div className="w-[26px] h-[26px] rounded-full bg-[#930A00]"></div>
                          <div className="w-[26px] h-[26px] rounded-full bg-[#929497]"></div>
                          <div className="w-[26px] h-[26px] rounded-full bg-[#073611]"></div>
                        </div>

                        <div className="flex items-center gap-[6px] font-medium">
                          <span>₹5,000</span>
                          <span className="line-through text-sm text-[#929497]">
                            ₹ (11,999)
                          </span>
                          <span className="text-[#073611] text-sm">
                            30% OFF
                          </span>
                        </div>

                        <div>
                          <span
                            style={{
                              background:
                                "linear-gradient(90deg, #FAF3D4 0%, #FAF3D4 100%)",
                            }}
                            className="inline-flex items-center justify-center rounded-[99px] border border-[#F7E69A] text-xs font-medium px-3 py-1"
                          >
                            One Size
                          </span>
                        </div>

                        <hr className="border-dashed" />
                      </div>

                      <div className="mt-4">
                        <div className="text-sm">Product Details</div>

                        <div className="mt-2 text-xs text-[#575F6E]">
                          <p>Set content: 1 Office chair</p>
                          <p>Color: Grey</p>
                          <p>Pattern: Solid</p>
                          <p>Type: Office chair</p>
                          <p>Back Height: High Black</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Modal
        open={createNewBOQ}
        closable={false}
        footer={false}
        centered={true}
        onCancel={() => setCreateNewBOQ(false)}
      >
        <div className="outline-none">
          <div className="py-4 px-5 flex items-center justify-between border-b border-[#E5E6E6]">
            <span className="font-noto text-sm font-semibold">
              Create New BOQ
            </span>
            <Image
              onClick={() => setCreateNewBOQ(false)}
              src="/Close.svg"
              width={16}
              height={16}
              alt="close-icon"
              className="cursor-pointer"
            />
          </div>

          <div className="p-5">
            <p className="font-noto text-[#59595C] text-xs font-medium">
              Upload BOQ *
            </p>

            <div className="mt-1 flex items-center gap-4">
              <div className="p-3 border border-[#E5E6E6] rounded-lg flex-1">
                <div className="flex items-center justify-center flex-col">
                  <div className="p-3 rounded bg-[#F1F1F1] flex items-center justify-center w-11 h-11">
                    <Image
                      src="/UploadSimple.svg"
                      width={20}
                      height={20}
                      alt="note-pencil"
                    />
                  </div>

                  <p className="mt-4 font-noto font-medium text-sm">
                    Import from Revit
                  </p>
                  <p className="mt-1 text-xs font-noto text-center text-[#59595C]">
                    Upload .rvt file to auto-populate BOQ
                  </p>
                </div>
              </div>
              <div className="font-noto text-sm text-[#59595C] font-medium">
                Or
              </div>
              <div className="p-3 border border-[#E5E6E6] rounded-lg flex-1">
                <div className="flex items-center justify-center flex-col">
                  <div className="p-3 rounded bg-[#F1F1F1] flex items-center justify-center w-11 h-11">
                    <Image
                      src="/NotePencil.svg"
                      width={20}
                      height={20}
                      alt="note-pencil"
                    />
                  </div>

                  <p className="mt-4 font-noto font-medium text-sm">
                    Add Manually
                  </p>
                  <p className="mt-1 text-xs font-noto text-center text-[#59595C]">
                    Create spaces and add items step by step
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg border border-[#E5E6E6] flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/Folder.svg"
                  width={36}
                  height={36}
                  alt="folder-icon"
                />
                <div className="font-noto text-xs">
                  <p className="font-medium">Assets.rvt</p>
                  <p className="mt-[2px] text-[#929497]">5.3MB</p>
                </div>
              </div>
              <Image
                src="/Trash.svg"
                width={16}
                height={16}
                alt="delete"
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="py-4 px-5 flex items-center justify-between border-t border-[#E5E6E6]">
            <button
              onClick={() => setCreateNewBOQ(false)}
              className="w-[93px] h-9 flex items-center justify-center border border-primary rounded-lg font-medium text-primary"
            >
              Cancel
            </button>
            <button className="w-[93px] h-9 flex items-center justify-center border border-primary rounded-lg font-medium text-white bg-primary">
              Upload
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectDetails;
