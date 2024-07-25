import React from 'react'
import { Form, Formik, ErrorMessage, Field } from "formik";

const AddProperty = () => {
    return (
        <div className='w-full h-auto flex items-center justify-center'>
            <div className='w-[1100px] h-auto my-14 border-2 rounded py-7'>
                <Formik
                    initialValues={{

                    }}
                    onSubmit={onsubmit}
                >
                    <Form>
                        <div className='w-full flex justify-between'>
                            <div className='flex w-[330px] pl-7 mt-4'>
                                <label htmlFor="Property Type">Property Type :</label>
                                <Field as="select" name="property" className="w-[180px]">
                                    <option value="" label="Select Property" />
                                    <option value="house" label="House" />
                                    <option value="pg" label="PG" />
                                    <option value="flat" label="Flat" />
                                    <option value="land" label="Land" />
                                </Field>
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="Property for">Property For :</label>
                                <Field as="select" name="for" className="w-[180px]">
                                    <option value="" label="Select " />
                                    <option value="sale" label="Sale" />
                                    <option value="rent" label="Rent" />
                                </Field>
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="price">Price :</label>
                                <Field type="number" placeholder="In number" name="price" className="border w-[180px] px-2" />
                            </div>
                        </div>
                        <div className='w-full flex justify-between'>
                            <div className='flex w-[330px] pl-7 mt-4'>
                                <label htmlFor="Carpet Area ">Carpet Area :</label>
                                <Field type="number" placeholder="In sqft" name="carpetarea" className="border w-[180px] px-2" />
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="Land mark">Landmark :</label>
                                <Field type="text" name="landmark" placeholder="landmark" className="border w-[180px] px-2" />
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="floor">Floor :</label>
                                <Field type="number" placeholder="In number" name="floor" className="border w-[180px] px-2" />
                            </div>
                        </div>
                        <div className='w-full flex justify-between'>
                            <div className='flex w-[330px] pl-7 mt-4'>
                                <label htmlFor="status">Status :</label>
                                <Field as="select" name="status" className="w-[180px]">
                                    <option value="" label="Select " />
                                    <option value="readytomove" label="Ready To Move" />
                                    <option value="oneweek" label="One Week" />
                                    <option value="twoweek" label="Two Week" />
                                    <option value="onemonth" label="One Month" />
                                    <option value="twomonth" label="Two Month" />
                                </Field>
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="wateravailabilty">Water Availabilty :</label>
                                <Field as="select" name="wateravailabilty" className="w-[180px]">
                                    <option value="" label="Select " />
                                    <option value="readytomove" label="Public Supply" />
                                    <option value="groundwatersources" label="Groundwater Sources" />
                                    <option value="river" label="River" />
                                    <option value="lake" label="Lake" />
                                </Field>
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="facing">Facing :</label>
                                <Field as="select" name="facing" className="w-[180px]">
                                    <option value="" label="Select " />
                                    <option value="north" label="North" />
                                    <option value="south" label="South" />
                                    <option value="east" label="East" />
                                    <option value="west" label="West" />
                                </Field>
                            </div>
                        </div>
                        <div className='w-full flex justify-between'>
                            <div className='flex w-[330px] pl-7 mt-4'>
                                <label htmlFor="funiture">Funiture :</label>
                                <Field as="select" name="funiture" className="w-[180px]">
                                    <option value="" label="Select " />
                                    <option value="furnished" label="Furnished" />
                                    <option value="semi-furnished" label="Semi-Furnished" />
                                    <option value="no-furnished" label="No-Furnished" />
                                </Field>
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="electricity">Electricity :</label>
                                <Field as="select" name="electricity" className="w-[180px]">
                                    <option value="" label="Select " />
                                    <option value="no" label="No" />
                                    <option value="semi-electric" label="Semi-Electric" />
                                    <option value="full-electric" label="Full-Electric" />
                                </Field>
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="ownership">Ownership :</label>
                                <Field as="select" name="ownership" className="w-[180px]">
                                    <option value="" label="Select " />
                                    <option value="sole proprietorship" label="Sole proprietorship" />
                                    <option value="partnership" label="Partnership" />
                                    <option value="corporation" label="Corporation" />
                                    <option value="s corporation" label="S corporation" />
                                </Field>
                            </div>
                        </div>
                        <div className='w-full flex justify-between'>
                            <div className='flex pl-7 w-[330px] mt-4'>
                                <label htmlFor="overlooking">Overlooking :</label>
                                <Field type="text" name="overlooking" placeholder="overlooking" className="border w-[180px] px-2" />
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="constructiuon">Age Of Constructiuon :</label>
                                <Field type="number" placeholder="In year" name="constructiuon" className="border w-[130px] px-2" />
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="additinal room">Additional Room :</label>
                                <Field type="text" name="additinalroom" placeholder="" className="border w-[180px] px-2" />
                            </div>
                            
                        </div>
                        <div className='w-full flex justify-between'>
                            <div className='flex pl-7 w-[330px] mt-4'>
                                <label htmlFor="lift">Lift :</label>
                                <Field as="select" name="lift" className="w-[180px]">
                                    <option value="" label="Select " />
                                    <option value="no" label="No" />
                                    <option value="1" label="1" />
                                    <option value="2" label="2" />
                                    <option value="3" label="3" />
                                    <option value="4" label="4" />
                                    
                                </Field>
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="autority approvel">Autority Approvel :</label>
                                <Field as="select" name="autority-approvel" className="w-[180px]">
                                    <option value="" label="Select " />
                                    <option value="panchayat" label="Panchayat" />
                                    <option value="municipality" label="Municipality" />
                                    <option value="corporation" label="Corporation" />
                                    
                                </Field>
                            </div>
                            <div className='flex w-[330px] mt-4'>
                                <label htmlFor="image">Image :</label>
                                <Field type="file" name="image" className="w-[120px] h-[24px]"/>
                            </div>
                        </div>
                    </Form>

                </Formik>

            </div>
        </div>
    )
}

export default AddProperty