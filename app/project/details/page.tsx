"use client";

import { Collapse, Dropdown, MenuProps, Select } from "antd";
import Image from "next/image";
import { useState } from "react";

const ProjectDetails = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Kitchen Equipments");

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="font-noto text-[#E91000] flex items-center gap-3 text-sm">
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

                {/* <div
                style={{
                  boxShadow:
                    "0 1px 2px 0 rgba(0, 0, 0, 0.10), 0 2px 6px 2px rgba(0, 0, 0, 0.10)",
                }}
                className="w-[220px] bg-white rounded-lg overflow-hidden"
              >
                <div className="p-3 flex items-center gap-3">
                  Create New BOQ
                </div>
                <div className="p-3 flex items-center gap-3">
                  Duplicate Current BOQ
                </div>
              </div> */}
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
                  className="px-2 py-1 h-8 flex items-center justify-center rounded-lg max-w-max border border-[#E5E6E6] bg-white font-noto text-sm cursor-pointer"
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
          onChange={(key) => setSelectedTab(key?.toString() || "")}
          items={[
            {
              key: "Kitchen Equipments",
              label: "Kitchen Equipments",
              children: (
                <div>
                  <table className="w-full table-fixed">
                    <thead>
                      <tr>
                        {[
                          { id: 1, name: "S.no.", width: "w-[69px]" },
                          { id: 2, name: "Category", width: "w-[120px]" },
                          { id: 3, name: "Description", width: "w-[168px]" },
                          { id: 4, name: "Zone" },
                          { id: 5, name: "Quantity" },
                          { id: 6, name: "Unit" },
                          { id: 7, name: "Rate Type" },
                          { id: 8, name: "Sizes" },
                          { id: 9, name: "Base Price" },
                          { id: 10, name: "Total Price" },
                        ]?.map((item) => (
                          <th
                            className={`font-normal py-1 px-3 text-sm text-[#575F6E] text-left ${item?.width ? item.width : ""}`}
                            key={item.id}
                          >
                            {item.name}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
                        </td>
                      </tr>
                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
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
          onChange={(key) => setSelectedTab(key?.toString() || "")}
          activeKey={selectedTab}
          items={[
            {
              key: "Meeting Room",
              label: "Meeting Room",
              children: (
                <div>
                  <table className="w-full table-fixed">
                    <thead>
                      <tr>
                        {[
                          { id: 1, name: "S.no.", width: "w-[69px]" },
                          { id: 2, name: "Category", width: "w-[120px]" },
                          { id: 3, name: "Description", width: "w-[168px]" },
                          { id: 4, name: "Zone" },
                          { id: 5, name: "Quantity" },
                          { id: 6, name: "Unit" },
                          { id: 7, name: "Rate Type" },
                          { id: 8, name: "Sizes" },
                          { id: 9, name: "Base Price" },
                          { id: 10, name: "Total Price" },
                        ]?.map((item) => (
                          <th
                            className={`font-normal py-1 px-3 text-sm text-[#575F6E] text-left ${item?.width ? item.width : ""}`}
                            key={item.id}
                          >
                            {item.name}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
                        </td>
                      </tr>
                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
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
          onChange={(key) => setSelectedTab(key?.toString() || "")}
          activeKey={selectedTab}
          items={[
            {
              key: "Cabin 1",
              label: "Cabin 1",
              children: (
                <div>
                  <table className="w-full table-fixed">
                    <thead>
                      <tr>
                        {[
                          { id: 1, name: "S.no.", width: "w-[69px]" },
                          { id: 2, name: "Category", width: "w-[120px]" },
                          { id: 3, name: "Description", width: "w-[168px]" },
                          { id: 4, name: "Zone" },
                          { id: 5, name: "Quantity" },
                          { id: 6, name: "Unit" },
                          { id: 7, name: "Rate Type" },
                          { id: 8, name: "Sizes" },
                          { id: 9, name: "Base Price" },
                          { id: 10, name: "Total Price" },
                        ]?.map((item) => (
                          <th
                            className={`font-normal py-1 px-3 text-sm text-[#575F6E] text-left ${item?.width ? item.width : ""}`}
                            key={item.id}
                          >
                            {item.name}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
                        </td>
                      </tr>

                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
                        </td>
                      </tr>
                      <tr className="font-noto text-xs font-medium">
                        <td className="px-3 py-2 text-sm">1</td>
                        <td className="truncate px-3 py-2 underline text-sm text-[#346DFF]">
                          <span className="cursor-pointer">
                            Kitchen Equipments
                          </span>
                        </td>
                        <td className="truncate px-3 py-2">
                          Top Made By 16 Swg. & U/s. Made By 18 Swg. 304 Grade,
                          Top Boarder Size 65mm And U/s. Boarder Size 38mm,
                          Vertical Pipe 38mm x 38mm x 16 Swg, Two U/s. In Pipe
                          Section, And Vertical Pipe Should Be On Adjustable
                          With Nylon Bullet Feet.
                        </td>
                        <td className="px-3 py-2">Kitchen</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">Pcs</td>
                        <td className="px-3 py-2">Rate Contract</td>
                        <td className="px-3 py-2">1350 x 700 x 800</td>
                        <td className="px-3 py-2">₹5,000</td>
                        <td className="px-3 py-2 text-primary text-sm">
                          ₹30,000
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
    </>
  );
};

export default ProjectDetails;
