"use client";

import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";

const Quotation = () => {
  const [exportModal, setExportModal] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <div className="flex items-center gap-4 p-6">
          <Image
            src="/ArrowRight.svg"
            width={16}
            height={16}
            alt="arrow-right"
            className="filter invert rotate-180 cursor-pointer"
          />
          <span className="text-sm font-semibold">Quotation</span>
        </div>

        <div className="p-6 bg-primary text-white grid grid-cols-4 gap-y-6">
          <div className="font-medium">
            <p className="text-sm opacity-80">Project Name</p>
            <p className="mt-2">New Floor Renovation</p>
          </div>
          <div className="font-medium">
            <p className="text-sm opacity-80">Budget Type</p>
            <p className="mt-2">Medium Budget</p>
          </div>
          <div className="font-medium">
            <p className="text-sm opacity-80">Carpet Area (Sq.Ft.)</p>
            <p className="mt-2">60072</p>
          </div>
          <div className="flex justify-end">
            <button
              style={{ background: "rgba(255, 255, 255, 0.20)" }}
              onClick={() => setExportModal(true)}
              className="w-[106px] h-9 flex items-center justify-center border border-[#FFF] rounded-lg text-sm font-medium gap-1 cursor-pointer"
            >
              <Image src="/Export.svg" width={16} height={16} alt="export" />
              Export
            </button>
          </div>
          <div className="font-medium">
            <p className="text-sm opacity-80">Design Theme</p>
            <p className="mt-2">Modern</p>
          </div>
          <div className="font-medium">
            <p className="text-sm opacity-80">Date & Time of Quotation</p>
            <p className="mt-2">Nov 2,2025 | 09:00 am</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="rounded-lg border border-[#E5E6E6] overflow-hidden">
          <table className="w-full font-noto text-xs font-medium">
            <thead className="bg-[#FAFAFA] text-[#6D6E71]">
              <tr>
                <th className="p-3 text-[#6D6E71] text-left">S.No.</th>
                <th className="p-3 text-[#6D6E71] text-left">Category</th>
                <th className="p-3 text-[#6D6E71] text-left">Total Price</th>
                <th className="p-3 text-[#6D6E71] text-left">Price/Sq.Ft.</th>
                <th className="p-3 text-[#6D6E71] text-left">Comments</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                {
                  id: 1,
                  category: "Chair",
                  totalPrice: "₹30,000",
                  pricePerSqFt: "₹500",
                  comments: "Comments",
                },

                {
                  id: 2,
                  category: "Table",
                  totalPrice: "₹50,000",
                  pricePerSqFt: "₹500",
                  comments: "Comments",
                },

                {
                  id: 3,
                  category: "Sofa",
                  totalPrice: "₹80,000",
                  pricePerSqFt: "₹500",
                  comments: "Comments",
                },

                {
                  id: 4,
                  category: "Bed",
                  totalPrice: "₹1,00,000",
                  pricePerSqFt: "₹500",
                  comments: "Comments",
                },

                {
                  id: 5,
                  category: "Cupboard",
                  totalPrice: "₹70,000",
                  pricePerSqFt: "₹500",
                  comments: "Comments",
                },
              ].map((item) => (
                <tr key={item?.id}>
                  <td className="p-3">{item?.id}</td>
                  <td className="p-3">{item?.category}</td>
                  <td className="p-3">{item?.totalPrice}</td>
                  <td className="p-3">{item?.pricePerSqFt}</td>
                  <td className="p-3">{item?.comments}</td>
                </tr>
              ))}

              <tr className="bg-[#FDEBEA]">
                <td className="p-3"></td>
                <td className="p-3">Sub Total Price</td>
                <td className="p-3">₹175,976,549</td>
                <td className="p-3">2929</td>
                <td className="p-3"></td>
              </tr>

              <tr className="bg-[#FDEBEA]">
                <td className="p-3"></td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    Special Discount in %{" "}
                    <input
                      type="text"
                      className="rounded border border-[#D1D2D3] w-14 h-6 px-2 outline-none"
                      placeholder="Enter"
                    />
                  </div>
                </td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
              </tr>

              <tr className="bg-[#FDEBEA]">
                <td className="p-3"></td>
                <td className="p-3">Total</td>
                <td className="p-3">₹175,976,549</td>
                <td className="p-3">2929</td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        open={exportModal}
        closable={false}
        footer={false}
        centered={true}
        width={480}
        onCancel={() => setExportModal(false)}
      >
        <div className="bg-white px-5 rounded-lg font-noto">
          <div className="py-4 flex items-center justify-between">
            <span className="text-sm font-semibold">Export</span>
            <Image
              src="/Close.svg"
              width={16}
              height={16}
              alt="cross-icon"
              className="cursor-pointer"
              onClick={() => setExportModal(false)}
            />
          </div>

          <div className="py-5 flex gap-4">
            <div className="p-3 rounded-lg border border-[#E5E6E6] flex-1 flex flex-col items-center cursor-pointer">
              <div className="p-3 rounded bg-[#F1F1F1] w-11 h-11 flex items-center justify-center">
                <Image
                  src="/FilePdf.svg"
                  width={20}
                  height={20}
                  alt="pdf-icon"
                />
              </div>
              <p className="mt-4 text-sm font-medium">Export as PDF</p>
              <p className="mt-1 text-[#59595C] text-xs text-center">
                The file will exported in .pdf format
              </p>
            </div>
            <div className="text-[#59595C] font-medium flex items-center justify-center">
              Or
            </div>
            <div className="p-3 rounded-lg border border-[#E5E6E6] flex-1 flex flex-col items-center cursor-pointer">
              <div className="p-3 rounded bg-[#F1F1F1] w-11 h-11 flex items-center justify-center">
                <Image
                  src="/MicrosoftExcelLogo.svg"
                  width={20}
                  height={20}
                  alt="excel-icon"
                />
              </div>
              <p className="mt-4 text-sm font-medium">Export as Excel</p>
              <p className="mt-1 text-[#59595C] text-xs text-center">
                The file will exported in .xls format
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Quotation;
