"use client";

import type { MenuProps } from "antd";
import { Dropdown, Input, Modal, Select } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
const { TextArea } = Input;

const Project = () => {
  const router = useRouter();
  const [modal, setModal] = useState({
    project: false,
    delete: false,
  });
  const [step, setStep] = useState(1);

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          onClick={() => setModal((prev) => ({ ...prev, delete: true }))}
          className="font-poppins text-[#E91000] flex items-center gap-3"
        >
          <Image src="/Trash.svg" width={20} height={20} alt="trash" />
          Delete
        </div>
      ),
      key: "1",
    },
  ];

  return (
    <>
      <div className="sticky top-0 bg-white z-50">
        <div className="flex justify-between items-center px-6 py-2 border-b border-[#E5E6E6]">
          <div>
            <h1 className="font-semibold text-sm">Projects</h1>
            <p className="font-noto text-xs text-[#59595C]">12 projects</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModal((prev) => ({ ...prev, project: true }))}
              className="bg-primary h-9 py-2 px-4 flex items-center justify-center text-white rounded-lg text-sm font-medium gap-2"
            >
              <Image src="/plus.svg" width={20} height={20} alt="plus-icon" />
              Create New Project
            </button>
          </div>
        </div>

        <div className="px-6 py-4 border-b border-[#E5E6E6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-72 h-8 relative flex items-center">
              <Image
                src="/MagnifyingGlass.svg"
                width={20}
                height={20}
                alt="search-icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 z-50"
              />
              <Input
                placeholder="Search by project name, client name"
                className="!pl-9 !font-noto !text-sm placeholder:text-[#929497] !w-full !h-full"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[1px] h-6 bg-[#E5E6E6]"></div>

            <div className="flex items-center relative rounded-lg border border-[#E5E6E6] w-[92px] h-8 gap-[6px] font-noto text-sm py-1 px-3 pl-2">
              Budget
              <Image
                src="/CaretDown.svg"
                width={16}
                height={16}
                alt="caret-down"
              />
              <Select
                options={[
                  {
                    value: "Low",
                    label: "Low",
                    desc: "₹ 1000-1200 per sq. ft.",
                  },
                  {
                    value: "Medium",
                    label: "Medium",
                    desc: "₹ 1200-1500 per sq. ft.",
                  },
                  {
                    value: "High",
                    label: "High",
                    desc: "₹ 1500-1800 per sq. ft.",
                  },
                ]}
                popupMatchSelectWidth={false}
                className="!absolute inset-0 opacity-0 w-full h-full"
                classNames={{
                  popup: {
                    root: "custom-select w-[200px]",
                  },
                }}
                optionRender={(option) => {
                  const data = option.data as {
                    value: string;
                    label: string;
                    desc: string;
                  };

                  return (
                    <div className="p-3 font-poppins">
                      <p className="text-sm">{data.label}</p>
                      <p className="text-xs mt-1 text-[#929497]">{data.desc}</p>
                    </div>
                  );
                }}
              />
            </div>

            <div className="flex items-center relative rounded-lg border border-[#E5E6E6] w-[139px] h-8 gap-[6px] font-noto text-sm py-1 px-3 pl-2">
              Design Theme
              <Image
                src="/CaretDown.svg"
                width={16}
                height={16}
                alt="caret-down"
              />
              <Select
                options={[
                  { value: "Modern", label: "Modern" },
                  { value: "Contemporary", label: "Contemporary" },
                  { value: "Classic", label: "Classic" },
                ]}
                popupMatchSelectWidth={false}
                className="!absolute inset-0 opacity-0 w-full h-full"
                classNames={{
                  popup: {
                    root: "custom-select",
                  },
                }}
                optionRender={(option) => (
                  <div className="p-3 font-poppins text-sm">
                    {option?.value}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 p-6">
        {[
          {
            id: 1,
            priority: "Medium",
            name: "eClerx Renovation Project",
            value: "Modern",
            company: "eClerx Solutions",
            cost: "90L",
          },

          {
            id: 2,
            priority: "Medium",
            name: "Ebay Build 200 Seater Project",
            value: "Classic",
            company: "Ebay Pvt. ltd",
            cost: "90L",
          },

          {
            id: 3,
            priority: "High",
            name: "eClerx Renovation",
            value: "Modern",
            company: "eClerx Solutions",
            cost: "5Cr",
          },

          {
            id: 4,
            priority: "Low",
            name: "Ebay Build",
            value: "Contemporary",
            company: "Ebay Pvt. ltd",
            cost: "40L",
          },

          {
            id: 5,
            priority: "Medium",
            name: "eClerx Renovation Project",
            value: "Contemporary",
            company: "eClerx Solutions",
            cost: "90L",
          },
        ]?.map((item) => (
          <div
            key={item?.id}
            className="p-4 rounded-lg border border-[#E5E6E6] bg-white flex flex-col gap-3 font-noto"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`h-[23px] flex items-center justify-center py-[2px] pl-[6px] pr-[8px] rounded text-xs ${item?.priority === "High" ? "text-[#073611] bg-[#C7F8D1B2]" : item?.priority === "Low" ? "text-[#930A00] bg-[#FFC4C080]" : "text-[#916C02] bg-[#FEEEC1]"}`}
                >
                  ₹ {item?.priority}
                </span>
                <span className="h-[23px] flex items-center justify-center bg-[#F1F1F1] text-[#59595C] text-xs px-2 py-[2px]">
                  {item?.value}
                </span>
              </div>
              <Dropdown
                styles={{
                  item: {
                    padding: 0,
                  },
                }}
                menu={{ items }}
                classNames={{
                  root: "custom-dropdown w-[144px]",
                }}
              >
                <Image
                  src="/DotsThreeVertical.svg"
                  width={16}
                  height={16}
                  alt="three-dots"
                  className="cursor-pointer"
                />
              </Dropdown>
            </div>

            <div className="mb-5">
              <p className="text-sm font-semibold">{item?.name}</p>
              <p className="text-sm text-[#59595C] underline mt-1">
                {item?.company}
              </p>
            </div>

            <div className="text-[#59595C] text-sm">
              Estimated Cost:
              <span className="font-medium ml-1">₹ {item?.cost}</span>
            </div>

            <hr />

            <div className="flex items-center gap-1 text-[#59595C]">
              <Image src="/clock.svg" width={14} height={14} alt="clock" />
              <span className="text-xs">Modified on 20 Feb, 02:45 PM</span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={modal?.delete}
        closable={false}
        footer={false}
        centered={true}
        width={320}
        onCancel={() => {
          setModal((prev) => ({
            ...prev,
            delete: false,
          }));
        }}
      >
        <div className="p-6">
          <p className="text-center font-noto font-semibold">
            Delete Project ?
          </p>
          <p className="mt-2 font-noto text-sm text-[#59595C] text-center">
            Are you sure you want to delete this project?
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => setModal((prev) => ({ ...prev, delete: false }))}
              className="flex-1 border border-primary h-9 flex items-center justify-center text-primary rounded-lg font-medium"
            >
              Cancel
            </button>
            <button className="flex-1 border border-primary bg-primary h-9 text-white rounded-lg font-medium">
              Delete
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={modal?.project}
        closable={false}
        footer={false}
        centered={true}
        width={480}
        onCancel={() => {
          setModal((prev) => ({
            ...prev,
            project: false,
          }));
          setStep(1);
        }}
      >
        <div className="rounded-lg font-noto">
          <div className="px-6 py-4 flex items-center justify-between border-b border-[#E5E6E6]">
            <div>
              <p className="font-noto text-sm font-semibold">
                Create New Project
              </p>
              <p className="text-xs font-noto text-[#59595C]">
                Step {step} of 2
              </p>
            </div>
            <Image
              onClick={() => {
                setModal((prev) => ({
                  ...prev,
                  project: false,
                }));
                setStep(1);
              }}
              src="/Close.svg"
              width={16}
              height={16}
              alt="close"
              className="cursor-pointer"
            />
          </div>

          <div className="p-5 flex justify-center flex-col gap-3">
            <div className="flex items-center justify-center gap-2 pb-2">
              <div className="flex-1 h-1 rounded-full bg-primary"></div>
              <div
                className={`flex-1 h-1 rounded-full ${step === 1 ? "bg-[#F1F1F1]" : "bg-primary"}`}
              ></div>
            </div>

            {step === 1 && (
              <>
                <div>
                  <p className="text-xs font-medium text-[#59595C]">
                    Project Name *
                  </p>
                  <Input
                    placeholder="eg. Workstation Renovation"
                    className="!mt-1 !px-3 !py-2 !font-noto !text-sm placeholder:!text-[#929497]"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#59595C]">
                    Client Name *
                  </p>
                  <Input
                    placeholder="eg. Awfis India"
                    className="!mt-1 !px-3 !py-2 !font-noto !text-sm placeholder:!text-[#929497]"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#59595C]">
                    Total Area (Sq.ft.)*
                  </p>
                  <Input
                    placeholder="Enter"
                    type="number"
                    className="!mt-1 !px-3 !py-2 !font-noto !text-sm placeholder:!text-[#929497]"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#59595C]">
                    Budget Type *
                  </p>
                  <div className="mt-1 flex gap-3">
                    <div className="flex-1 py-2 px-3 rounded border border-[#E5E6E6]">
                      <p className="text-xs">Low</p>
                      <p className="text-[10px] mt-1 text-[#59595C]">
                        ₹ 1000-1200 per sq. ft.
                      </p>
                    </div>
                    <div className="flex-1 py-2 px-3 rounded border border-[#E5E6E6]">
                      <p className="text-xs">Medium</p>
                      <p className="text-[10px] mt-1 text-[#59595C]">
                        ₹ 1200-1500 per sq. ft.
                      </p>
                    </div>
                    <div className="flex-1 py-2 px-3 rounded border border-[#E5E6E6]">
                      <p className="text-xs">High</p>
                      <p className="text-[10px] mt-1 text-[#59595C]">
                        ₹ 1500-1800 per sq. ft.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <p className="text-xs font-medium text-[#59595C]">
                    Project Type *
                  </p>
                  <div className="mt-1 flex gap-3"></div>
                  <div className="flex items-center justify-between relative rounded-lg border border-[#E5E6E6] h-10 gap-[6px] font-noto text-sm py-2 px-3">
                    Select
                    <Image
                      src="/CaretDown.svg"
                      width={24}
                      height={24}
                      alt="caret-down"
                    />
                    <Select
                      options={[
                        {
                          value: "Managed Office (MO)",
                          label: "Managed Office (MO)",
                        },
                        {
                          value: "Design & Build",
                          label: "Design & Build",
                        },
                        {
                          value: "Banquet",
                          label: "Banquet",
                        },
                      ]}
                      popupMatchSelectWidth={true}
                      className="!absolute inset-0 opacity-0 w-full h-full"
                      classNames={{
                        popup: {
                          root: "custom-select",
                        },
                      }}
                      optionRender={(option) => {
                        const data = option.data as {
                          value: string;
                          label: string;
                          desc: string;
                        };

                        return (
                          <div className="p-3 font-poppins">
                            <p className="text-sm">{data.label}</p>
                          </div>
                        );
                      }}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-[#59595C]">
                    Design Theme *
                  </p>
                  <div className="mt-1 flex gap-3"></div>
                  <div className="flex items-center justify-between relative rounded-lg border border-[#E5E6E6] h-10 gap-[6px] font-noto text-sm py-2 px-3">
                    Select
                    <Image
                      src="/CaretDown.svg"
                      width={24}
                      height={24}
                      alt="caret-down"
                    />
                    <Select
                      options={[
                        {
                          value: "Modern",
                          label: "Modern",
                          desc: "Sample description of modern Design theme",
                        },
                        {
                          value: "Contemporary",
                          label: "Contemporary",
                          desc: "Sample description of contemporary Design theme",
                        },
                        {
                          value: "Classic",
                          label: "Classic",
                          desc: "Sample description of contemporary Design theme",
                        },
                      ]}
                      popupMatchSelectWidth={true}
                      className="!absolute inset-0 opacity-0 w-full h-full"
                      classNames={{
                        popup: {
                          root: "custom-select",
                        },
                      }}
                      optionRender={(option) => {
                        const data = option.data as {
                          value: string;
                          label: string;
                          desc: string;
                        };

                        return (
                          <div className="p-3 font-poppins">
                            <p className="text-sm">{data.label}</p>
                            <p className="text-xs mt-1 text-[#929497]">
                              {data.desc}
                            </p>
                          </div>
                        );
                      }}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-[#59595C]">
                    Awfis Theme *
                  </p>
                  <div className="mt-1 flex gap-3"></div>
                  <div className="flex items-center justify-between relative rounded-lg border border-[#E5E6E6] h-10 gap-[6px] font-noto text-sm py-2 px-3">
                    Select
                    <Image
                      src="/CaretDown.svg"
                      width={24}
                      height={24}
                      alt="caret-down"
                    />
                    <Select
                      options={[
                        {
                          value: "Awfis 5.0",
                          label: "Awfis 5.0",
                        },
                        {
                          value: "Awfis 6.0",
                          label: "Awfis 6.0",
                        },
                        {
                          value: "Gold",
                          label: "Gold",
                        },
                        {
                          value: "Elite",
                          label: "Elite",
                        },
                      ]}
                      popupMatchSelectWidth={true}
                      className="!absolute inset-0 opacity-0 w-full h-full"
                      classNames={{
                        popup: {
                          root: "custom-select",
                        },
                      }}
                      optionRender={(option) => {
                        const data = option.data as {
                          value: string;
                          label: string;
                          desc: string;
                        };

                        return (
                          <div className="p-3 font-poppins">
                            <p className="text-sm">{data.label}</p>
                          </div>
                        );
                      }}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-[#59595C]">
                    Description
                  </p>

                  <TextArea
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    className="!mt-1"
                  />
                  <p className="mt-1 font-noto text-xs font-medium text-[#59595C]">
                    0/200 words
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-[#59595C]">
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

                        <p className="mt-3 font-noto font-medium text-xs">
                          Import from Revit
                        </p>
                        <p className="mt-1 text-[10px] font-noto text-center text-[#59595C]">
                          Upload .rvt file to auto-populate BOQ
                        </p>
                      </div>
                    </div>
                    <div>Or</div>
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

                        <p className="mt-3 font-noto font-medium text-xs">
                          Add Manually
                        </p>
                        <p className="mt-1 text-[10px] font-noto text-center text-[#59595C]">
                          Create spaces and add items step by step
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-[#E5E6E6] flex items-center justify-between">
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
              </>
            )}
          </div>

          <div className="px-6 py-4 flex items-center justify-between border-t border-[#E5E6E6]">
            <button
              onClick={() => {
                setModal((prev) => ({
                  ...prev,
                  project: false,
                }));
                setStep(1);
              }}
              className="flex items-center justify-center w-[93px] h-9 border border-primary rounded-lg font-poppins text-sm font-medium text-primary"
            >
              Cancel
            </button>
            {step === 1 && (
              <button
                onClick={() => setStep((prev) => prev + 1)}
                className="flex items-center justify-center w-[93px] h-9 gap-2 bg-primary rounded-lg font-poppins text-sm font-medium text-white"
              >
                Next
                <Image
                  src="/ArrowRight.svg"
                  width={16}
                  height={16}
                  alt="arrow-right"
                />
              </button>
            )}
            {step === 2 && (
              <button
                onClick={() => router.push("/project/details")}
                className="h-9 w-[143px] rounded-lg bg-primary text-white px-5 font-poppins text-sm font-medium"
              >
                Create Project
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Project;
