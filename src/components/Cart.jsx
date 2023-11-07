import React from 'react'
import {Table} from './Table'


export const Cart = () => {
  return (
    <section>
    <div className="flex justify-center items-center text-2xl font-bold pt-24 pb-7">
      <h1>CART SECTION</h1>
    </div>

    <div className="flex md:flex-row flex-col items-start justify-center">
      <div class="flex md:flex-col gap-3 w-3/4 bg-white px-10 py-10">
        <Table></Table>
        <Table></Table>
      </div>

      <div
        id="summary"
        class="w-1/4 px-5 h-auto bg-gray-200 rounded-xl me-16 mb-16 pb-5"
      >
        <h1 class="font-semibold text-2xl border-b pb-2 pt-8">
          Order Summary
        </h1>
        <div class="flex justify-between mt-5">
          <span class="font-semibold text-sm uppercase">Items 3</span>
          <span class="font-semibold text-sm">590$</span>
        </div>

        <button class="bg-green-500 hover:bg-green-600 px-5 py-2 text-sm text-white uppercase mt-5 w-full">
          Apply Coupon
        </button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total Price</span>
            <span>$600</span>
          </div>
          <button class="bg-red-500 font-semibold hover:bg-red-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}
