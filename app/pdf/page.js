// app/pdf/page.jsx
"use client";
import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import ContractPDF from '../../components/ContractPDF';

export default function ContractForm() {
  const [formData, setFormData] = useState({
    contract_date: '',
    client_name: '',
    commissioner_name: '',
    project_name: '',
    project_specifications: '',
    prototype_due_date: '',
    source_code_due_date: '',
    hardware_name: '',
    hardware_due_date: '',
    documentation_due_date: '',
    project_fee: '',
    payment_1_amount: '',
    payment_2_amount: '',
    payment_2_date_range: '',
    payment_3_amount: '',
    payment_3_date_range: '',
    client_signature: '',
    commissioner_signature: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blob = await pdf(<ContractPDF data={formData} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contract.pdf';
    a.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bumble-beige)]">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-[var(--black)]">
          Generate Contract PDF
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label
                htmlFor={key}
                className="mb-1 text-sm font-semibold capitalize text-[var(--black)]"
              >
                {key.replace(/_/g, ' ')}
              </label>
              <input
                id={key}
                name={key}
                type={key.includes('date') ? 'date' : 'text'}
                value={value}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFB703] bg-white text-black"
                placeholder={key.replace(/_/g, ' ')}
                required
              />
            </div>
          ))}

          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="w-48 h-14 bg-[var(--bumble-yellow)] border-4 border-[#FFB703] text-black font-bold rounded-full hover:bg-yellow-200 transition"
            >
              Download PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
