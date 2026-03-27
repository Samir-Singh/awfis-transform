"use client";

import { Collapse, Select } from "antd";
import Image from "next/image";
import { useState } from "react";

const ProjectDetails = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Kitchen Equipments");

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

            <div className="w-9 h-9 rounded border border-[#E5E6E6] p-1 flex items-center justify-center">
              <Image
                src="/company-two.svg"
                width={100}
                height={100}
                alt="company-logo"
              />
            </div>

            <div>
              <p className="text-sm font-medium">New Floor Renovation</p>
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

          <div className="w-9 h-9 rounded-full relative overflow-hidden">
            <Image src="/user-icon.svg" fill alt="user-image" />
          </div>
        </div>

        <div className="p-3 rounded-lg border border-[#E5E6E6] bg-white mt-3 mx-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E6E6]">
            <div className="h-[34px] flex items-center justify-center py-[6px] pl-2 pr-3 rounded-lg border border-[#E5E6E6] bg-[#F1F1F1] gap-[6px] cursor-pointer">
              <Image
                src="/LockSimple.svg"
                width={16}
                height={16}
                alt="lock-icon"
              />
              <span className="font-noto text-sm">20/09/2025_BOQ</span>
              <Image
                src="/CaretDown.svg"
                width={16}
                height={16}
                alt="caret-down"
              />
            </div>
            <button className="h-9 text-white rounded-lg bg-primary px-5 flex items-center justify-center text-xs">
              Generate Quotation
            </button>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <div className="cursor-pointer relative py-1 pl-2 pr-3 flex items-center justify-center gap-[6px] rounded-lg border border-[#E5E6E6]">
              <Image
                src="/SlidersHorizontal.svg"
                width={16}
                height={16}
                alt="filter-icon"
              />
              <span className="font-noto text-sm">Filter</span>
              <Image
                src="/CaretDown.svg"
                width={16}
                height={16}
                alt="caret-down"
              />

              <Select
                options={[
                  { value: "Zones", label: "Zones" },
                  { value: "Product Type", label: "Product Type" },
                ]}
                popupMatchSelectWidth={false}
                className="!absolute inset-0 opacity-0 w-full h-full"
                classNames={{
                  popup: {
                    root: "custom-select",
                  },
                }}
                optionRender={(option) => (
                  <div className="p-3 font-noto text-sm text-[#59595C]">
                    {option?.value}
                  </div>
                )}
              />
            </div>

            <div className="flex items-center flex-1 gap-2 text-sm font-noto overflow-x-auto no-scrollbar">
              {[
                {
                  id: 1,
                  name: "Kitchen Equipments",
                },
                {
                  id: 2,
                  name: "Meeting Room",
                },
                {
                  id: 3,
                  name: "Cabin 1",
                },
              ]?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedTab(item?.name)}
                  className={`px-2 py-1 rounded-lg hover:bg-[#F1F1F1] cursor-pointer flex-shrink-0 ${selectedTab === item?.name ? "bg-[#FDEBEA] text-primary" : ""}`}
                >
                  {item.name}
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
