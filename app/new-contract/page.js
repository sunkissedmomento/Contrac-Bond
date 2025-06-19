'use client'

import { useForm } from 'react-hook-form'

export default function NewContractPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log('Filled Contract Data:', data)
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="bg-card-bg rounded-2xl shadow-lg w-full max-w-2xl p-8 text-foreground border border-card-border">
        <h1 className="text-3xl font-bold mb-6 text-center">Create New Contract</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1">Client Name</label>
            <input
              {...register('clientName')}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Project Title</label>
            <input
              {...register('projectTitle')}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Project Scope</label>
            <textarea
              {...register('projectScope')}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              rows="4"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Payment Terms</label>
            <input
              {...register('paymentTerms')}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Start Date</label>
              <input
                type="date"
                {...register('startDate')}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">End Date</label>
              <input
                type="date"
                {...register('endDate')}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-black font-semibold py-2 px-4 rounded transition"
          >
            Generate PDF (Coming Soon)
          </button>
        </form>
      </div>
    </main>
  )
}
