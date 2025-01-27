import React, { useEffect, useState } from 'react'
import './seguimiento.css';
import { useForm } from '../../hooks/useForm';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Seguimiento = () => {
    const location = useLocation();
    const params = useParams()
    const state = location.state;
    const [formValues, handleInputChange, , setData] = useForm({
        fecha: new Date(Date.now()).toLocaleDateString(),
        producto: "",
        media: "",
        body: "",
        seamless: "",
        ref: "",
        dp: "DP",
        causa: "",
        tallaini1: "S",
        tallaini2: "M",
        tallaini3: "L",
        tallaini4: "XL",
        tallaini5: "SM",
        tallaini6: "LXL",
        cantidad1: "",
        cantidad2: "",
        cantidad3: "",
        cantidad4: "",
        cantidad5: "",
        cantidad6: "",
        santoni1: "",
        santoni2: "",
        santoni3: "",
        lonati1: "",
        lonati2: "",
        lonati3: "",
        matec1: "",
        matec2: "",
        matec3: "",
        zona1: "",
        zona2: "",
        zona3: "",
        zona4: "",
        zona5: "",
        hilo1: "",
        hilo2: "",
        hilo3: "",
        hilo4: "",
        hilo5: "",
        hilo6: "",
        hilo7: "",
        hilo8: "",
        hilo9: "",
        hilo10: "",
        hilo11: "",
        hilo12: "",
        hilo13: "",
        hilo14: "",
        hilo15: "",
        t1_1: "",
        t1_2: "",
        t1_3: "",
        t1_4: "",
        t1_5: "",
        t1_6: "",
        t1_7: "",
        t1_8: "",
        t1_9: "",
        t1_10: "",
        t1_11: "",
        t1_12: "",
        t2_1: "",
        t2_2: "",
        t2_3: "",
        t2_4: "",
        t2_5: "",
        t2_6: "",
        t2_7: "",
        t2_8: "",
        t2_9: "",
        t2_10: "",
        t2_11: "",
        t2_12: "",
        t3_1: "",
        t3_2: "",
        t3_3: "",
        t3_4: "",
        t3_5: "",
        t3_6: "",
        t3_7: "",
        t3_8: "",
        t3_9: "",
        t3_10: "",
        t3_11: "",
        t3_12: "",
        t4_1: "",
        t4_2: "",
        t4_3: "",
        t4_4: "",
        t4_5: "",
        t4_6: "",
        t4_7: "",
        t4_8: "",
        t4_9: "",
        t4_10: "",
        t4_11: "",
        t4_12: "",
        t5_1: "",
        t5_2: "",
        t5_3: "",
        t5_4: "",
        t5_5: "",
        t5_6: "",
        t5_7: "",
        t5_8: "",
        t5_9: "",
        t5_10: "",
        t5_11: "",
        t5_12: "",
        t6_1: "",
        t6_2: "",
        t6_3: "",
        t6_4: "",
        t6_5: "",
        t6_6: "",
        t6_7: "",
        t6_8: "",
        t6_9: "",
        t6_10: "",
        t6_11: "",
        t6_12: "",
        t7_1: "",
        t7_2: "",
        t7_3: "",
        t7_4: "",
        t7_5: "",
        t7_6: "",
        t7_7: "",
        t7_8: "",
        t7_9: "",
        t7_10: "",
        t7_11: "",
        t7_12: "",
        t8_1: "",
        t8_2: "",
        t8_3: "",
        t8_4: "",
        t8_5: "",
        t8_6: "",
        t8_7: "",
        t8_8: "",
        t8_9: "",
        t8_10: "",
        t8_11: "",
        t8_12: "",
        t9_1: "",
        t9_2: "",
        t9_3: "",
        t9_4: "",
        t9_5: "",
        t9_6: "",
        t9_7: "",
        t9_8: "",
        t9_9: "",
        t9_10: "",
        t9_11: "",
        t9_12: "",
        t10_1: "",
        t10_2: "",
        t10_3: "",
        t10_4: "",
        t10_5: "",
        t10_6: "",
        t10_7: "",
        t10_8: "",
        t10_9: "",
        t10_10: "",
        t10_11: "",
        t10_12: "",
        t11_1: "",
        t11_2: "",
        t11_3: "",
        t11_4: "",
        t11_5: "",
        t11_6: "",
        t11_7: "",
        t11_8: "",
        t11_9: "",
        t11_10: "",
        t11_11: "",
        t11_12: "",
        m1_1: "",
        m1_2: "",
        m1_3: "",
        m1_4: "",
        m1_5: "",
        m1_6: "",
        m1_7: "",
        m1_8: "",
        m1_9: "",
        m1_10: "",
        m1_11: "",
        m1_12: "",
        m2_1: "",
        m2_2: "",
        m2_3: "",
        m2_4: "",
        m2_5: "",
        m2_6: "",
        m2_7: "",
        m2_8: "",
        m2_9: "",
        m2_10: "",
        m2_11: "",
        m2_12: "",
        m3_1: "",
        m3_2: "",
        m3_3: "",
        m3_4: "",
        m3_5: "",
        m3_6: "",
        m3_7: "",
        m3_8: "",
        m3_9: "",
        m3_10: "",
        m3_11: "",
        m3_12: "",
        m4_1: "",
        m4_2: "",
        m4_3: "",
        m4_4: "",
        m4_5: "",
        m4_6: "",
        m4_7: "",
        m4_8: "",
        m4_9: "",
        m4_10: "",
        m4_11: "",
        m4_12: "",
        m5_1: "",
        m5_2: "",
        m5_3: "",
        m5_4: "",
        m5_5: "",
        m5_6: "",
        m5_7: "",
        m5_8: "",
        m5_9: "",
        m5_10: "",
        m5_11: "",
        m5_12: "",
        m6_1: "",
        m6_2: "",
        m6_3: "",
        m6_4: "",
        m6_5: "",
        m6_6: "",
        m6_7: "",
        m6_8: "",
        m6_9: "",
        m6_10: "",
        m6_11: "",
        m6_12: "",
        m7_1: "",
        m7_2: "",
        m7_3: "",
        m7_4: "",
        m7_5: "",
        m7_6: "",
        m7_7: "",
        m7_8: "",
        m7_9: "",
        m7_10: "",
        m7_11: "",
        m7_12: "",
        m8_1: "",
        m8_2: "",
        m8_3: "",
        m8_4: "",
        m8_5: "",
        m8_6: "",
        m8_7: "",
        m8_8: "",
        m8_9: "",
        m8_10: "",
        m8_11: "",
        m8_12: "",
        m9_1: "",
        m9_2: "",
        m9_3: "",
        m9_4: "",
        m9_5: "",
        m9_6: "",
        m9_7: "",
        m9_8: "",
        m9_9: "",
        m9_10: "",
        m9_11: "",
        m9_12: "",
        obs: "",


    });
    const {
        zona1,
        zona2,
        zona3,
        zona4,
        zona5,
        fecha,
        producto,
        media,
        body,
        seamless,
        ref,
        dp,
        causa,
        tallaini1,
        tallaini2,
        tallaini3,
        tallaini4,
        tallaini5,
        tallaini6,
        cantidad1,
        cantidad2,
        cantidad3,
        cantidad4,
        cantidad5,
        cantidad6,
        santoni1,
        santoni2,
        santoni3,
        lonati1,
        lonati2,
        lonati3,
        matec1,
        matec2,
        matec3,
        hilo1,
        hilo2,
        hilo3,
        hilo4,
        hilo5,
        hilo6,
        hilo7,
        hilo8,
        hilo9,
        hilo10,
        hilo11,
        hilo12,
        hilo13,
        hilo14,
        hilo15,
        torsion1,
        torsion2,
        torsion3,
        torsion4,
        torsion5,
        torsion6,
        torsion7,
        torsion8,
        torsion9,
        torsion10,
        torsion11,
        torsion12,
        torsion13,
        torsion14,
        torsion15,
        proveedor1,
        proveedor2,
        proveedor3,
        proveedor4,
        proveedor5,
        proveedor6,
        proveedor7,
        proveedor8,
        proveedor9,
        proveedor10,
        proveedor11,
        proveedor12,
        proveedor13,
        proveedor14,
        proveedor15,
        lote1,
        lote2,
        lote3,
        lote4,
        lote5,
        lote6,
        lote7,
        lote8,
        lote9,
        lote10,
        lote11,
        lote12,
        lote13,
        lote14,
        lote15,
        c1_1,
        c1_2,
        c1_3,
        c1_4,
        c1_5,
        c1_6,
        c1_7,
        c1_8,
        c2_1,
        c2_2,
        c2_3,
        c2_4,
        c2_5,
        c2_6,
        c2_7,
        c2_8,
        c3_1,
        c3_2,
        c3_3,
        c3_4,
        c3_5,
        c3_6,
        c3_7,
        c3_8,
        c4_1,
        c4_2,
        c4_3,
        c4_4,
        c4_5,
        c4_6,
        c4_7,
        c4_8,
        c5_1,
        c5_2,
        c5_3,
        c5_4,
        c5_5,
        c5_6,
        c5_7,
        c5_8,
        c6_1,
        c6_2,
        c6_3,
        c6_4,
        c6_5,
        c6_6,
        c6_7,
        c6_8,
        c7_1,
        c7_2,
        c7_3,
        c7_4,
        c7_5,
        c7_6,
        c7_7,
        c7_8,
        c8_1,
        c8_2,
        c8_3,
        c8_4,
        c8_5,
        c8_6,
        c8_7,
        c8_8,
        c9_1,
        c9_2,
        c9_3,
        c9_4,
        c9_5,
        c9_6,
        c9_7,
        c9_8,
        c10_1,
        c10_2,
        c10_3,
        c10_4,
        c10_5,
        c10_6,
        c10_7,
        c10_8,
        c11_1,
        c11_2,
        c11_3,
        c11_4,
        c11_5,
        c11_6,
        c11_7,
        c11_8,
        c12_1,
        c12_2,
        c12_3,
        c12_4,
        c12_5,
        c12_6,
        c12_7,
        c12_8,
        c13_1,
        c13_2,
        c13_3,
        c13_4,
        c13_5,
        c13_6,
        c13_7,
        c13_8,
        c14_1,
        c14_2,
        c14_3,
        c14_4,
        c14_5,
        c14_6,
        c14_7,
        c14_8,
        c15_1,
        c15_2,
        c15_3,
        c15_4,
        c15_5,
        c15_6,
        c15_7,
        c15_8,
        descrip1,
        descrip2,
        descrip3,
        descrip4,
        descrip5,
        descrip6,
        descrip7,
        descrip8,
        descrip9,
        m1_1,
        m1_2,
        m1_3,
        m1_4,
        m1_5,
        m1_6,
        m1_7,
        m1_8,
        m1_9,
        m1_10,
        m1_11,
        m1_12,
        m2_1,
        m2_2,
        m2_3,
        m2_4,
        m2_5,
        m2_6,
        m2_7,
        m2_8,
        m2_9,
        m2_10,
        m2_11,
        m2_12,
        m3_1,
        m3_2,
        m3_3,
        m3_4,
        m3_5,
        m3_6,
        m3_7,
        m3_8,
        m3_9,
        m3_10,
        m3_11,
        m3_12,
        m4_1,
        m4_2,
        m4_3,
        m4_4,
        m4_5,
        m4_6,
        m4_7,
        m4_8,
        m4_9,
        m4_10,
        m4_11,
        m4_12,
        m5_1,
        m5_2,
        m5_3,
        m5_4,
        m5_5,
        m5_6,
        m5_7,
        m5_8,
        m5_9,
        m5_10,
        m5_11,
        m5_12,
        m6_1,
        m6_2,
        m6_3,
        m6_4,
        m6_5,
        m6_6,
        m6_7,
        m6_8,
        m6_9,
        m6_10,
        m6_11,
        m6_12,
        m7_1,
        m7_2,
        m7_3,
        m7_4,
        m7_5,
        m7_6,
        m7_7,
        m7_8,
        m7_9,
        m7_10,
        m7_11,
        m7_12,
        m8_1,
        m8_2,
        m8_3,
        m8_4,
        m8_5,
        m8_6,
        m8_7,
        m8_8,
        m8_9,
        m8_10,
        m8_11,
        m8_12,
        m9_1,
        m9_2,
        m9_3,
        m9_4,
        m9_5,
        m9_6,
        m9_7,
        m9_8,
        m9_9,
        m9_10,
        m9_11,
        m9_12,
        horma,
        nmq,
        color,
        nmqh,
        tacabado,
        t1_1,
        t1_2,
        t1_3,
        t1_4,
        t1_5,
        t1_6,
        t1_7,
        t1_8,
        t1_9,
        t1_10,
        t1_11,
        t1_12,
        t2_1,
        t2_2,
        t2_3,
        t2_4,
        t2_5,
        t2_6,
        t2_7,
        t2_8,
        t2_9,
        t2_10,
        t2_11,
        t2_12,
        t3_1,
        t3_2,
        t3_3,
        t3_4,
        t3_5,
        t3_6,
        t3_7,
        t3_8,
        t3_9,
        t3_10,
        t3_11,
        t3_12,
        t4_1,
        t4_2,
        t4_3,
        t4_4,
        t4_5,
        t4_6,
        t4_7,
        t4_8,
        t4_9,
        t4_10,
        t4_11,
        t4_12,
        t5_1,
        t5_2,
        t5_3,
        t5_4,
        t5_5,
        t5_6,
        t5_7,
        t5_8,
        t5_9,
        t5_10,
        t5_11,
        t5_12,
        t6_1,
        t6_2,
        t6_3,
        t6_4,
        t6_5,
        t6_6,
        t6_7,
        t6_8,
        t6_9,
        t6_10,
        t6_11,
        t6_12,
        t7_1,
        t7_2,
        t7_3,
        t7_4,
        t7_5,
        t7_6,
        t7_7,
        t7_8,
        t7_9,
        t7_10,
        t7_11,
        t7_12,
        t8_1,
        t8_2,
        t8_3,
        t8_4,
        t8_5,
        t8_6,
        t9_1,
        t9_2,
        t9_3,
        t9_4,
        t9_5,
        t9_6,
        t10_1,
        t10_2,
        t10_3,
        t10_4,
        t10_5,
        t10_6,
        t11_1,
        t11_2,
        t11_3,
        t11_4,
        t11_5,
        t11_6,
        obs,
    } = formValues;

    useEffect(() => {
        if (state != null) {
            setData(state.hero.seguimiento[state.index])
        }
    }, [state])


    const update = async (e) => {
        e.preventDefault();
        const edit = [...state.hero.seguimiento]
        edit[state.index] = formValues
        await axios.put(`https://desarrollonylon.vercel.app/api/update-desarrollo/${params.id}`, { seguimiento: edit })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Actualizado',
                    showConfirmButton: false,
                    timer: 1200
                })

            })
    }

    const guardar = async (e) => {
        e.preventDefault();
        const post = ([
            ...state.hero.seguimiento, formValues
        ])
        console.log(post)
        await axios.put(`https://desarrollonylon.vercel.app/api/update-desarrollo/${params.id}`, { seguimiento: post })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Actualizado',
                    showConfirmButton: false,
                    timer: 1200
                })

            })
    }


    console.log(state, "state")
    console.log(formValues, "formValues")

    return (
        <div className='px-5'>
            <div className='row'>
                <div className='col-3'>
                    <img src="../../assets/logo.jpg" alt="logo" />
                </div>
                <div className='col-9 text-center' style={{ fontSize: "150%" }}>PRE- FICHA TECNICA DE SEGUIMIENTO A DESARROLLOS Y APROBACIONES CIRCULARES PEQUEÑO DIAMETRO</div>
            </div>
            <div className='py-4'>
                <div className='row'>
                    <div className='col-5 '>
                        <div className='row'>
                            <div className='col-2' >CAUSA:</div>
                            <div className='col'>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center  "
                                    id="causa"
                                    name="causa"
                                    value={causa}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-1 border border-dark  justify-content-end'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="media"
                            name="media"
                            value={media}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col-2 justify-content-end'>MEDIA</div>
                    <div className='col-1'></div>
                    <div className='col-2'></div>
                </div>

                <div className='row'>
                    <div className='col-5'></div>
                    <div className='col-1 border border-dark justify-content-end'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="body"
                            name="body"
                            value={body}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col-2 '>BODY</div>
                    <div className='col-1 border border-dark justify-content-end'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="seamless"
                            name="seamless"
                            value={seamless}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col-2 '>SEAMLESS</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-1'>FECHA:</div>
                <div className='col-2  border-dark border-bottom'>
                    <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="fecha"
                        name="fecha"
                        value={fecha}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                </div>
                <div className='col-3 '></div>
                <div className='col-1 text-end'>D.P </div>
                <div className='col-2  border-dark border-bottom'>
                    <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="dp"
                        name="dp"
                        value={dp}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-1'>PRODUCTO:</div>
                <div className='col-2  border-dark border-bottom'>
                    <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="producto"
                        name="producto"
                        value={producto}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                </div>
            </div>
            <div className='row py-2'>
                <div className='col-1'></div>
                <div className='col-2 '></div>
                <div className='col-3 '></div>
                <div className='col-1 text-end'>REF</div>
                <div className='col-2  border-dark border-bottom'>
                    <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="ref"
                        name="ref"
                        value={ref}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                </div>
            </div>
            <div className='my-4'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col border border-white'></div>
                    <div className='col border border-white'></div>
                    <div className='col border border-white'></div>
                    <div className='col border border-white'></div>
                    <div className='col border border-white'></div>
                    <div className='col border border-white'></div>
                    <div className='col '></div>
                    <div className='col-1'>SANTONI</div>
                    <div className='col border border-dark mx-4'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="satoni1"
                            name="santoni1"
                            value={santoni1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />

                    </div>
                    <div className='col border border-dark mx-4'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="santoni2"
                            name="santoni2"
                            value={santoni2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />

                    </div>
                    <div className='col border border-dark mx-4'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="santoni3"
                            name="santoni3"
                            value={santoni3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />

                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>TALLAS:</div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="tallaini1"
                            name="tallaini1"
                            value={tallaini1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="tallaini2"
                            name="tallaini2"
                            value={tallaini2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="tallaini3"
                            name="tallaini3"
                            value={tallaini3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="tallaini4"
                            name="tallaini4"
                            value={tallaini4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="tallaini5"
                            name="tallaini5"
                            value={tallaini5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="tallaini6"
                            name="tallaini6"
                            value={tallaini6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col text-end'>MAQ </div>
                    <div className='col-1'>LONATI</div>
                    <div className='col border border-dark mx-4'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="lonati1"
                            name="lonati1"
                            value={lonati1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark mx-4'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="lonati2"
                            name="lonati2"
                            value={lonati2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark mx-4'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="lonati3"
                            name="lonati3"
                            value={lonati3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>CANTIDAD:</div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="cantidad1"
                            name="cantidad1"
                            value={cantidad1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        /></div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="cantidad2"
                            name="cantidad2"
                            value={cantidad2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        /></div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="cantidad3"
                            name="cantidad3"
                            value={cantidad3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        /></div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="cantidad4"
                            name="cantidad4"
                            value={cantidad4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        /></div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="cantidad5"
                            name="cantidad5"
                            value={cantidad5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="cantidad6"
                            name="cantidad6"
                            value={cantidad6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col '></div>
                    <div className='col-1 '>MATEC</div>
                    <div className='col border border-dark mx-4'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="matec1"
                            name="matec1"
                            value={matec1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark mx-4'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="matec2"
                            name="matec2"
                            value={matec2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark mx-4'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="matec3"
                            name="matec3"
                            value={matec3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <table className="table table-bordered border border-dark table-sm text-center m-0  ">
                    <tbody>
                        <tr>
                            <td className='text-start' colSpan="5">1. ESTRUCTURA</td>
                            <td colSpan="8">CAIDAS</td>
                        </tr>
                        <tr>
                            <td className='' style={{ width: "10%" }} >ZONA</td>
                            <td className='' style={{ width: "25%" }}>HILOS</td>
                            <td className='' style={{ width: "5%" }}>TORSION</td>
                            <td className='' style={{ width: "5%" }}>PROVEEDOR</td>
                            <td className='' style={{ width: "5%" }} >LOTE</td>
                            <td className='' >1</td>
                            <td className='' >2</td>
                            <td className='' >3</td>
                            <td className='' >4</td>
                            <td className='' >5</td>
                            <td className='' >6</td>
                            <td className='' >7</td>
                            <td className='' >8</td>
                        </tr>
                        <tr>
                            <td rowSpan="3 ">
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="zona1"
                                    name="zona1"
                                    value={zona1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo1"
                                    name="hilo1"
                                    value={hilo1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion1"
                                    name="torsion1"
                                    value={torsion1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor1"
                                    name="proveedor1"
                                    value={proveedor1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote1"
                                name="lote1"
                                value={lote1}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c1_1"
                                    name="c1_1"
                                    value={c1_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c1_2"
                                    name="c1_2"
                                    value={c1_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c1_3"
                                    name="c1_3"
                                    value={c1_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c1_4"
                                    name="c1_4"
                                    value={c1_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c1_5"
                                    name="c1_5"
                                    value={c1_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c1_6"
                                    name="c1_6"
                                    value={c1_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c1_7"
                                    name="c1_7"
                                    value={c1_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c1_8"
                                    name="c1_8"
                                    value={c1_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo2"
                                    name="hilo2"
                                    value={hilo2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion2"
                                    name="torsion2"
                                    value={torsion2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor2"
                                    name="proveedor2"
                                    value={proveedor2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote2"
                                name="lote2"
                                value={lote2}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c2_1"
                                    name="c2_1"
                                    value={c2_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c2_2"
                                    name="c2_2"
                                    value={c2_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c2_3"
                                    name="c2_3"
                                    value={c2_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c2_4"
                                    name="c2_4"
                                    value={c2_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c2_5"
                                    name="c2_5"
                                    value={c2_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c2_6"
                                    name="c2_6"
                                    value={c2_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c2_7"
                                    name="c2_7"
                                    value={c2_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c2_8"
                                    name="c2_8"
                                    value={c2_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo3"
                                    name="hilo3"
                                    value={hilo3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion3"
                                    name="torsion3"
                                    value={torsion3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor3"
                                    name="proveedor3"
                                    value={proveedor3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote3"
                                name="lote3"
                                value={lote3}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c3_1"
                                    name="c3_1"
                                    value={c3_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c3_2"
                                    name="c3_2"
                                    value={c3_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c3_3"
                                    name="c3_3"
                                    value={c3_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c3_4"
                                    name="c3_4"
                                    value={c3_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c3_5"
                                    name="c3_5"
                                    value={c3_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c3_6"
                                    name="c3_6"
                                    value={c3_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c3_7"
                                    name="c3_7"
                                    value={c3_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c3_8"
                                    name="c3_8"
                                    value={c3_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="3 ">
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="zona2"
                                    name="zona2"
                                    value={zona2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo4"
                                    name="hilo4"
                                    value={hilo4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion4"
                                    name="torsion4"
                                    value={torsion4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor4"
                                    name="proveedor4"
                                    value={proveedor4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote4"
                                name="lote4"
                                value={lote4}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c4_1"
                                    name="c4_1"
                                    value={c4_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c4_2"
                                    name="c4_2"
                                    value={c4_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c4_3"
                                    name="c4_3"
                                    value={c4_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c4_4"
                                    name="c4_4"
                                    value={c4_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c4_5"
                                    name="c4_5"
                                    value={c4_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c4_6"
                                    name="c4_6"
                                    value={c4_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c4_7"
                                    name="c4_7"
                                    value={c4_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c4_8"
                                    name="c4_8"
                                    value={c4_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo5"
                                    name="hilo5"
                                    value={hilo5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion5"
                                    name="torsion5"
                                    value={torsion5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor5"
                                    name="proveedor5"
                                    value={proveedor5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote5"
                                name="lote5"
                                value={lote5}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c5_1"
                                    name="c5_1"
                                    value={c5_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c5_2"
                                    name="c5_2"
                                    value={c5_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c5_3"
                                    name="c5_3"
                                    value={c5_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c5_4"
                                    name="c5_4"
                                    value={c5_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c5_5"
                                    name="c5_5"
                                    value={c5_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c5_6"
                                    name="c5_6"
                                    value={c5_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c5_7"
                                    name="c5_7"
                                    value={c5_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c5_8"
                                    name="c5_8"
                                    value={c5_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo6"
                                    name="hilo6"
                                    value={hilo6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion6"
                                    name="torsion6"
                                    value={torsion6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor6"
                                    name="proveedor6"
                                    value={proveedor6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote6"
                                name="lote6"
                                value={lote6}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c6_1"
                                    name="c6_1"
                                    value={c6_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c6_2"
                                    name="c6_2"
                                    value={c6_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c6_3"
                                    name="c6_3"
                                    value={c6_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c6_4"
                                    name="c6_4"
                                    value={c6_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c6_5"
                                    name="c6_5"
                                    value={c6_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c6_6"
                                    name="c6_6"
                                    value={c6_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c6_7"
                                    name="c6_7"
                                    value={c6_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c6_8"
                                    name="c6_8"
                                    value={c6_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="3 ">
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="zona3"
                                    name="zona3"
                                    value={zona3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo7"
                                    name="hilo7"
                                    value={hilo7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion7"
                                    name="torsion7"
                                    value={torsion7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor7"
                                    name="proveedor7"
                                    value={proveedor7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote7"
                                name="lote7"
                                value={lote7}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c7_1"
                                    name="c7_1"
                                    value={c7_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c7_2"
                                    name="c7_2"
                                    value={c7_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c7_3"
                                    name="c7_3"
                                    value={c7_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c7_4"
                                    name="c7_4"
                                    value={c7_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c7_5"
                                    name="c7_5"
                                    value={c7_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c7_6"
                                    name="c7_6"
                                    value={c7_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c7_7"
                                    name="c7_7"
                                    value={c7_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c7_8"
                                    name="c7_8"
                                    value={c7_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo8"
                                    name="hilo8"
                                    value={hilo8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion8"
                                    name="torsion8"
                                    value={torsion8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor8"
                                    name="proveedor8"
                                    value={proveedor8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote8"
                                name="lote8"
                                value={lote8}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c8_1"
                                    name="c8_1"
                                    value={c8_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c8_2"
                                    name="c8_2"
                                    value={c8_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c8_3"
                                    name="c8_3"
                                    value={c8_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c8_4"
                                    name="c8_4"
                                    value={c8_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c8_5"
                                    name="c8_5"
                                    value={c8_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c8_6"
                                    name="c8_6"
                                    value={c8_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c8_7"
                                    name="c8_7"
                                    value={c8_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c8_8"
                                    name="c8_8"
                                    value={c8_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo9"
                                    name="hilo9"
                                    value={hilo9}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion9"
                                    name="torsion9"
                                    value={torsion9}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor9"
                                    name="proveedor9"
                                    value={proveedor9}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote9"
                                name="lote9"
                                value={lote9}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c9_1"
                                    name="c9_1"
                                    value={c9_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c9_2"
                                    name="c9_2"
                                    value={c9_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c9_3"
                                    name="c9_3"
                                    value={c9_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c9_4"
                                    name="c9_4"
                                    value={c9_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c9_5"
                                    name="c9_5"
                                    value={c9_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c9_6"
                                    name="c9_6"
                                    value={c9_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c9_7"
                                    name="c9_7"
                                    value={c9_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c9_8"
                                    name="c9_8"
                                    value={c9_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="3 ">
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="zona4"
                                    name="zona4"
                                    value={zona4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo10"
                                    name="hilo10"
                                    value={hilo10}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion10"
                                    name="torsion10"
                                    value={torsion10}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor10"
                                    name="proveedor10"
                                    value={proveedor10}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote10"
                                name="lote10"
                                value={lote10}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c10_1"
                                    name="c10_1"
                                    value={c10_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c10_2"
                                    name="c10_2"
                                    value={c10_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c10_3"
                                    name="c10_3"
                                    value={c10_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c10_4"
                                    name="c10_4"
                                    value={c10_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c10_5"
                                    name="c10_5"
                                    value={c10_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c10_6"
                                    name="c10_6"
                                    value={c10_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c10_7"
                                    name="c10_7"
                                    value={c10_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c10_8"
                                    name="c10_8"
                                    value={c10_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo11"
                                    name="hilo11"
                                    value={hilo11}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="t1_"
                                    name="t1_"
                                    value={torsion11}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor11"
                                    name="proveedor11"
                                    value={proveedor11}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote11"
                                name="lote11"
                                value={lote11}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c11_1"
                                    name="c11_1"
                                    value={c11_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c11_2"
                                    name="c11_2"
                                    value={c11_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c11_3"
                                    name="c11_3"
                                    value={c11_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c11_4"
                                    name="c11_4"
                                    value={c11_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c11_5"
                                    name="c11_5"
                                    value={c11_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c11_6"
                                    name="c11_6"
                                    value={c11_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c11_7"
                                    name="c11_7"
                                    value={c11_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c11_8"
                                    name="c11_8"
                                    value={c11_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo12"
                                    name="hilo12"
                                    value={hilo12}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion12"
                                    name="torsion12"
                                    value={torsion12}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor12"
                                    name="proveedor12"
                                    value={proveedor12}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote12"
                                name="lote12"
                                value={lote12}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c12_1"
                                    name="c12_1"
                                    value={c12_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c12_2"
                                    name="c12_2"
                                    value={c12_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c12_3"
                                    name="c12_3"
                                    value={c12_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c12_4"
                                    name="c12_4"
                                    value={c12_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c12_5"
                                    name="c12_5"
                                    value={c12_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c12_6"
                                    name="c12_6"
                                    value={c12_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c12_7"
                                    name="c12_7"
                                    value={c12_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c12_8"
                                    name="c12_8"
                                    value={c12_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="3 ">
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="zona5"
                                    name="zona5"
                                    value={zona5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo13"
                                    name="hilo13"
                                    value={hilo13}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion13"
                                    name="torsion13"
                                    value={torsion13}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor13"
                                    name="proveedor13"
                                    value={proveedor13}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote13"
                                name="lote13"
                                value={lote13}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c13_1"
                                    name="c13_1"
                                    value={c13_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c13_2"
                                    name="c13_2"
                                    value={c13_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c13_3"
                                    name="c13_3"
                                    value={c13_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c13_4"
                                    name="c13_4"
                                    value={c13_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c13_5"
                                    name="c13_5"
                                    value={c13_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c13_6"
                                    name="c13_6"
                                    value={c13_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c13_7"
                                    name="c13_7"
                                    value={c13_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c13_8"
                                    name="c13_8"
                                    value={c13_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo14"
                                    name="hilo14"
                                    value={hilo14}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion14"
                                    name="torsion14"
                                    value={torsion14}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor14"
                                    name="proveedor14"
                                    value={proveedor14}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote14"
                                name="lote14"
                                value={lote14}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c14_1"
                                    name="c14_1"
                                    value={c14_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c14_2"
                                    name="c14_2"
                                    value={c14_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c14_3"
                                    name="c14_3"
                                    value={c14_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c14_4"
                                    name="c14_4"
                                    value={c14_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c14_5"
                                    name="c14_5"
                                    value={c14_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c14_6"
                                    name="c14_6"
                                    value={c14_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c14_7"
                                    name="c14_7"
                                    value={c14_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c14_8"
                                    name="c14_8"
                                    value={c14_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="hilo15"
                                    name="hilo15"
                                    value={hilo15}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="torsion15"
                                    name="torsion15"
                                    value={torsion15}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="proveedor15"
                                    name="proveedor15"
                                    value={proveedor15}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td> <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="lote15"
                                name="lote15"
                                value={lote15}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c15_1"
                                    name="c15_1"
                                    value={c15_1}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c15_2"
                                    name="c15_2"
                                    value={c15_2}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c15_3"
                                    name="c15_3"
                                    value={c15_3}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c15_4"
                                    name="c15_4"
                                    value={c15_4}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c15_5"
                                    name="c15_5"
                                    value={c15_5}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c15_6"
                                    name="c15_6"
                                    value={c15_6}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c15_7"
                                    name="c15_7"
                                    value={c15_7}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control form-control-sm border-0 p-0 text-center "
                                    id="c15_8"
                                    name="c15_8"
                                    value={c15_8}
                                    onChange={handleInputChange}
                                    required={true}
                                    autoComplete="on"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row'>
                <div className='col border border-dark'>2. MEDIDAS EN CRUDO:  CETME Y REPOSO</div>
            </div>
            <div className='text-center'>
                <div className='row'>
                    <div className='col-2 border border-dark '></div>
                    <div className='col border border-dark'>CRUDO    CETME</div>
                    <div className='col border border-dark'>CRUDO      PLANO</div>
                    <div className='col border border-dark'>CRUDO    CETME</div>
                    <div className='col border border-dark'>CRUDO      PLANO</div>
                    <div className='col border border-dark'>CRUDO    CETME</div>
                    <div className='col border border-dark'>CRUDO      PLANO</div>
                    <div className='col border border-dark'>CRUDO    CETME</div>
                    <div className='col border border-dark'>CRUDO      PLANO</div>
                    <div className='col border border-dark'>CRUDO    CETME</div>
                    <div className='col border border-dark'>CRUDO      PLANO</div>
                    <div className='col border border-dark'>CRUDO    CETME</div>
                    <div className='col border border-dark'>CRUDO      PLANO</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark'>TALLAS</div>
                    <div className='col border border-dark'>{tallaini1}</div>
                    <div className='col border border-dark'>{tallaini2} </div>
                    <div className='col border border-dark'>{tallaini3}</div>
                    <div className='col border border-dark'>{tallaini4}</div>
                    <div className='col border border-dark'>{tallaini5} </div>
                    <div className='col border border-dark'>{tallaini6} </div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="descrip1"
                            name="descrip1"
                            value={descrip1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="m1_1"
                            name="m1_1"
                            value={m1_1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="m1_2"
                            name="m1_2"
                            value={m1_2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="m1_3"
                            name="m1_3"
                            value={m1_3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="m1_4"
                            name="m1_4"
                            value={m1_4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="m1_5"
                            name="m1_5"
                            value={m1_5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m1_6"
                        name="m1_6"
                        value={m1_6}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m1_7"
                        name="m1_7"
                        value={m1_7}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m1_8"
                        name="m1_8"
                        value={m1_8}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m1_9"
                        name="m1_9"
                        value={m1_9}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m1_10"
                        name="m1_10"
                        value={m1_10}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m1_11"
                        name="m1_11"
                        value={m1_11}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m1_12"
                        name="m1_12"
                        value={m1_12}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="descrip2"
                            name="descrip2"
                            value={descrip2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_1"
                        name="m2_1"
                        value={m2_1}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_2"
                        name="m2_2"
                        value={m2_2}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_3"
                        name="m2_3"
                        value={m2_3}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_4"
                        name="m2_4"
                        value={m2_4}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_5"
                        name="m2_5"
                        value={m2_5}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_6"
                        name="m2_6"
                        value={m2_6}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_7"
                        name="m2_7"
                        value={m2_7}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_8"
                        name="m2_8"
                        value={m2_8}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_9"
                        name="m2_9"
                        value={m2_9}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_10"
                        name="m2_10"
                        value={m2_10}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_11"
                        name="m2_11"
                        value={m2_11}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m2_12"
                        name="m2_12"
                        value={m2_12}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="descrip3"
                            name="descrip3"
                            value={descrip3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_1"
                        name="m3_1"
                        value={m3_1}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_2"
                        name="m3_2"
                        value={m3_2}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_3"
                        name="m3_3"
                        value={m3_3}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_4"
                        name="m3_4"
                        value={m3_4}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_5"
                        name="m3_5"
                        value={m3_5}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_6"
                        name="m3_6"
                        value={m3_6}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_7"
                        name="m3_7"
                        value={m3_7}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_8"
                        name="m3_8"
                        value={m3_8}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_9"
                        name="m3_9"
                        value={m3_9}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_10"
                        name="m3_10"
                        value={m3_10}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_11"
                        name="m3_11"
                        value={m3_11}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m3_12"
                        name="m3_12"
                        value={m3_12}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="descrip4"
                            name="descrip4"
                            value={descrip4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_1"
                        name="m4_1"
                        value={m4_1}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_2"
                        name="m4_2"
                        value={m4_2}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_3"
                        name="m4_3"
                        value={m4_3}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_4"
                        name="m4_4"
                        value={m4_4}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_5"
                        name="m4_5"
                        value={m4_5}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_6"
                        name="m4_6"
                        value={m4_6}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_7"
                        name="m4_7"
                        value={m4_7}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_8"
                        name="m4_8"
                        value={m4_8}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_9"
                        name="m4_9"
                        value={m4_9}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_10"
                        name="m4_10"
                        value={m4_10}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_11"
                        name="m4_11"
                        value={m4_11}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m4_12"
                        name="m4_12"
                        value={m4_12}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="descrip5"
                            name="descrip5"
                            value={descrip5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_1"
                        name="m5_1"
                        value={m5_1}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_2"
                        name="m5_2"
                        value={m5_2}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_3"
                        name="m5_3"
                        value={m5_3}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_4"
                        name="m5_4"
                        value={m5_4}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_5"
                        name="m5_5"
                        value={m5_5}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_6"
                        name="m5_6"
                        value={m5_6}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_7"
                        name="m5_7"
                        value={m5_7}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_8"
                        name="m5_8"
                        value={m5_8}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_9"
                        name="m5_9"
                        value={m5_9}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_10"
                        name="m5_10"
                        value={m5_10}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_11"
                        name="m5_11"
                        value={m5_11}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m5_12"
                        name="m5_12"
                        value={m5_12}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="descrip6"
                            name="descrip6"
                            value={descrip6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_1"
                        name="m6_1"
                        value={m6_1}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_2"
                        name="m6_2"
                        value={m6_2}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_3"
                        name="m6_3"
                        value={m6_3}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_4"
                        name="m6_4"
                        value={m6_4}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_5"
                        name="m6_5"
                        value={m6_5}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_6"
                        name="m6_6"
                        value={m6_6}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_7"
                        name="m6_7"
                        value={m6_7}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_8"
                        name="m6_8"
                        value={m6_8}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_9"
                        name="m6_9"
                        value={m6_9}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_10"
                        name="m6_10"
                        value={m6_10}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_11"
                        name="m6_11"
                        value={m6_11}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m6_12"
                        name="m6_12"
                        value={m6_12}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="descrip7"
                            name="descrip7"
                            value={descrip7}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_1"
                        name="m7_1"
                        value={m7_1}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_2"
                        name="m7_2"
                        value={m7_2}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_3"
                        name="m7_3"
                        value={m7_3}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_4"
                        name="m7_4"
                        value={m7_4}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_5"
                        name="m7_5"
                        value={m7_5}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_6"
                        name="m7_6"
                        value={m7_6}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_7"
                        name="m7_7"
                        value={m7_7}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_8"
                        name="m7_8"
                        value={m7_8}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_9"
                        name="m7_9"
                        value={m7_9}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_10"
                        name="m7_10"
                        value={m7_10}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_11"
                        name="m7_11"
                        value={m7_11}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m7_12"
                        name="m7_12"
                        value={m7_12}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="descrip8"
                            name="descrip8"
                            value={descrip8}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_1"
                        name="m8_1"
                        value={m8_1}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_2"
                        name="m8_2"
                        value={m8_2}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_3"
                        name="m8_3"
                        value={m8_3}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_4"
                        name="m8_4"
                        value={m8_4}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_5"
                        name="m8_5"
                        value={m8_5}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_6"
                        name="m8_6"
                        value={m8_6}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_7"
                        name="m8_7"
                        value={m8_7}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_8"
                        name="m8_8"
                        value={m8_8}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_9"
                        name="m8_9"
                        value={m8_9}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_10"
                        name="m8_10"
                        value={m8_10}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_11"
                        name="m8_11"
                        value={m8_11}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m8_12"
                        name="m8_12"
                        value={m8_12}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center"
                            id="descrip9"
                            name="descrip9"
                            value={descrip9}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_1"
                        name="m9_1"
                        value={m9_1}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_2"
                        name="m9_2"
                        value={m9_2}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_3"
                        name="m9_3"
                        value={m9_3}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_4"
                        name="m9_4"
                        value={m9_4}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_5"
                        name="m9_5"
                        value={m9_5}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_6"
                        name="m9_6"
                        value={m9_6}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_7"
                        name="m9_7"
                        value={m9_7}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_8"
                        name="m9_8"
                        value={m9_8}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_9"
                        name="m9_9"
                        value={m9_9}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_10"
                        name="m9_10"
                        value={m9_10}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_11"
                        name="m9_11"
                        value={m9_11}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                    <div className='col border border-dark'> <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="m9_12"
                        name="m9_12"
                        value={m9_12}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col border border-dark'>ELABORO</div>
                <div className='col border border-dark'>REVISO:</div>
                <div className='col border border-dark'>APROBO:</div>
            </div>
            <div className='row'>
                <div className='col border border-dark'>3. TINTORERIA</div>
            </div>
            <div className='row'>
                <div className='col border border-dark'>FECHA DE INICIO:</div>
                <div className='col border border-dark'>FECHA DE ENTREGA:</div>
            </div>
            <div className='row'>
                <div className='col-5'>
                    <div className='row'>
                        <div className='col border border-dark'>CONDICIONES</div>
                        <div className='col border border-dark'>SOLICITADO</div>
                        <div className='col border border-dark'>RESULTADO</div>
                    </div>
                    <div className='row'>
                        <div className='col border border-dark'>No. MAQ</div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="nmq"
                                name="nmq"
                                value={nmq}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col border border-dark'>COLOR</div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="color"
                                name="color"
                                value={color}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col border border-dark'>TIPO DE HORMA</div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="horma"
                                name="horma"
                                value={horma}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                        </div>
                    </div>
                    <div className='row' >
                        <div className='col border border-dark'>MAQ.   PREHORMADO</div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="nmqh"
                                name="nmqh"
                                value={nmqh}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col border border-dark'>TIPO DE ACABADO</div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="tacabado"
                                name="tacabado"
                                value={tacabado}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>

                        </div>
                    </div>
                </div>
                <div className='col-7 border border-dark p-0'>
                    <div className='col border border-dark'>OBSERVACIONES: TEÑIDO Y SECADO TOMBLER <br /><br /><br /><br /><br />
                    </div>
                    <div className='col'>CONTROLADOR O LIDER DE AREA</div>
                </div>
            </div>
            <div className='row'>
                <div className='col border border-dark'>OBSERVACIONES:</div>
            </div>
            <div className='row'>
                <div className='col border border-dark'>ELABORO:</div>
                <div className='col border border-dark'>REVISO:</div>
                <div className='col border border-dark'>APROBO:</div>
            </div>





            <div className='my-5'>
                <div className='row'>
                    <div className='col border border-dark'>4. MODELOS
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1 border border-dark '>TALLA</div>
                    <div className='col border border-dark'>MODELO</div>
                    <div className='col border border-dark'>CONCEPTO</div>
                </div>
                <div className='row'>
                    <div className='col-1 border border-dark'><br /><br /> </div>
                    <div className='col border border-dark'><br /><br /> </div>
                    <div className='col border border-dark'><br /><br /> </div>
                </div>
                <div className='row'>
                    <div className='col-1 border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                </div>
                <div className='row'>
                    <div className='col-1 border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                </div>
                <div className='row'>
                    <div className='col-1 border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                </div>
                <div className='row'>
                    <div className='col-1 border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                </div>
                <div className='row'>
                    <div className='col-1 border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                    <div className='col border border-dark'><br /><br /></div>
                </div>
                <div className='row'>
                    <div className='col border border-dark'>5. MEDIDAS EN TERMINADO PLANO CETME Y PREHORMADO</div>
                </div>
                <div className='text-center'>
                    <div className='row '>
                        <div className='col-2 border border-dark'></div>
                        <div className='col border border-dark'>CRUDO    CETME</div>
                        <div className='col border border-dark'>CRUDO      PLANO</div>
                        <div className='col border border-dark'>CRUDO    CETME</div>
                        <div className='col border border-dark'>CRUDO      PLANO</div>
                        <div className='col border border-dark'>CRUDO    CETME</div>
                        <div className='col border border-dark'>CRUDO      PLANO</div>
                        <div className='col border border-dark'>CRUDO    CETME</div>
                        <div className='col border border-dark'>CRUDO      PLANO</div>
                        <div className='col border border-dark'>CRUDO    CETME</div>
                        <div className='col border border-dark'>CRUDO      PLANO</div>
                        <div className='col border border-dark'>CRUDO    CETME</div>
                        <div className='col border border-dark'>CRUDO      PLANO</div>

                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark'>TALLAS</div>
                        <div className='col border border-dark'>{tallaini1}</div>
                        <div className='col border border-dark'>{tallaini2} </div>
                        <div className='col border border-dark'>{tallaini3}</div>
                        <div className='col border border-dark'>{tallaini4}</div>
                        <div className='col border border-dark'>{tallaini5} </div>
                        <div className='col border border-dark'>{tallaini6} </div>

                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{descrip1}</div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_1"
                            name="t1_1"
                            value={t1_1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_2"
                            name="t1_2"
                            value={t1_2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_3"
                            name="t1_3"
                            value={t1_3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_4"
                            name="t1_4"
                            value={t1_4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_5"
                            name="t1_5"
                            value={t1_5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_6"
                            name="t1_6"
                            value={t1_6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_7"
                            name="t1_7"
                            value={t1_7}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_8"
                            name="t1_8"
                            value={t1_8}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_9"
                            name="t1_9"
                            value={t1_9}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_10"
                            name="t1_10"
                            value={t1_10}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_11"
                            name="t1_11"
                            value={t1_11}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t1_12"
                            name="t1_12"
                            value={t1_12}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{descrip2}</div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_1"
                            name="t2_1"
                            value={t2_1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_2"
                            name="t2_2"
                            value={t2_2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_3"
                            name="t2_3"
                            value={t2_3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_4"
                            name="t2_4"
                            value={t2_4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_5"
                            name="t2_5"
                            value={t2_5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_6"
                            name="t2_6"
                            value={t2_6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_7"
                            name="t2_7"
                            value={t2_7}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_8"
                            name="t2_8"
                            value={t2_8}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_9"
                            name="t2_9"
                            value={t2_9}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_10"
                            name="t2_10"
                            value={t2_10}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_11"
                            name="t2_11"
                            value={t2_11}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t2_12"
                            name="t2_12"
                            value={t2_12}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{descrip3}</div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_1"
                            name="t3_1"
                            value={t3_1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_2"
                            name="t3_2"
                            value={t3_2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_3"
                            name="t3_3"
                            value={t3_3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_4"
                            name="t3_4"
                            value={t3_4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_5"
                            name="t3_5"
                            value={t3_5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_6"
                            name="t3_6"
                            value={t3_6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_7"
                            name="t3_7"
                            value={t3_7}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_8"
                            name="t3_8"
                            value={t3_8}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_9"
                            name="t3_9"
                            value={t3_9}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_10"
                            name="t3_10"
                            value={t3_10}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_11"
                            name="t3_11"
                            value={t3_11}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t3_12"
                            name="t3_12"
                            value={t3_12}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{descrip4}</div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_1"
                            name="t4_1"
                            value={t4_1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_2"
                            name="t4_2"
                            value={t4_2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_3"
                            name="t4_3"
                            value={t4_3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_4"
                            name="t4_4"
                            value={t4_4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_5"
                            name="t4_5"
                            value={t4_5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_6"
                            name="t4_6"
                            value={t4_6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_7"
                            name="t4_7"
                            value={t4_7}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_8"
                            name="t4_8"
                            value={t4_8}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_9"
                            name="t4_9"
                            value={t4_9}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_10"
                            name="t4_10"
                            value={t4_10}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_11"
                            name="t4_11"
                            value={t4_11}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t4_12"
                            name="t4_12"
                            value={t4_12}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{descrip5}</div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_1"
                            name="t5_1"
                            value={t5_1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_2"
                            name="t5_2"
                            value={t5_2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_3"
                            name="t5_3"
                            value={t5_3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_4"
                            name="t5_4"
                            value={t5_4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_5"
                            name="t5_5"
                            value={t5_5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_6"
                            name="t5_6"
                            value={t5_6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_7"
                            name="t5_7"
                            value={t5_7}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_8"
                            name="t5_8"
                            value={t5_8}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_9"
                            name="t5_9"
                            value={t5_9}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_10"
                            name="t5_10"
                            value={t5_10}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_11"
                            name="t5_11"
                            value={t5_11}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t5_12"
                            name="t5_12"
                            value={t5_12}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{descrip6}</div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_1"
                            name="t6_1"
                            value={t6_1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_2"
                            name="t6_2"
                            value={t6_2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_3"
                            name="t6_3"
                            value={t6_3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_4"
                            name="t6_4"
                            value={t6_4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_5"
                            name="t6_5"
                            value={t6_5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_6"
                            name="t6_6"
                            value={t6_6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_7"
                            name="t6_7"
                            value={t6_7}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_8"
                            name="t6_8"
                            value={t6_8}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_9"
                            name="t6_9"
                            value={t6_9}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_10"
                            name="t6_10"
                            value={t6_10}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_11"
                            name="t6_11"
                            value={t6_11}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t6_12"
                            name="t6_12"
                            value={t6_12}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{descrip7}</div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_1"
                            name="t7_1"
                            value={t7_1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_2"
                            name="t7_2"
                            value={t7_2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_3"
                            name="t7_3"
                            value={t7_3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_4"
                            name="t7_4"
                            value={t7_4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_5"
                            name="t7_5"
                            value={t7_5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_6"
                            name="t7_6"
                            value={t7_6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_7"
                            name="t7_7"
                            value={t7_7}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_8"
                            name="t7_8"
                            value={t7_8}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_9"
                            name="t7_9"
                            value={t7_9}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_10"
                            name="t7_10"
                            value={t7_10}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_11"
                            name="t7_11"
                            value={t7_11}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                        <div className='col border border-dark'> <input
                            type="text"
                            className="form-control form-control-sm border-0 p-0 text-center "
                            id="t7_12"
                            name="t7_12"
                            value={t7_12}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col border border-dark'>ELONGACIONES LABORATORIO %</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark'></div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t8_1"
                                name="t8_1"
                                value={t8_1}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t8_2"
                                name="t8_2"
                                value={t8_2}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t8_3"
                                name="t8_3"
                                value={t8_3}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t8_4"
                                name="t8_4"
                                value={t8_4}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t8_5"
                                name="t8_5"
                                value={t8_5}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t8_6"
                                name="t8_6"
                                value={t8_6}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark'></div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t9_1"
                                name="t9_1"
                                value={t9_1}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t9_2"
                                name="t9_2"
                                value={t9_2}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t9_3"
                                name="t9_3"
                                value={t9_3}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t9_4"
                                name="t9_4"
                                value={t9_4}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t9_5"
                                name="t9_5"
                                value={t9_5}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t9_6"
                                name="t9_6"
                                value={t9_6}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark'></div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t10_1"
                                name="t10_1"
                                value={t10_1}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t10_2"
                                name="t10_2"
                                value={t10_2}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t10_3"
                                name="t10_3"
                                value={t10_3}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t10_4"
                                name="t10_4"
                                value={t10_4}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t10_5"
                                name="t10_5"
                                value={t10_5}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t10_6"
                                name="t10_6"
                                value={t10_6}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark'></div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t11_1"
                                name="t11_1"
                                value={t11_1}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t11_2"
                                name="t11_2"
                                value={t11_2}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t11_3"
                                name="t11_3"
                                value={t11_3}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t11_4"
                                name="t11_4"
                                value={t11_4}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t11_5"
                                name="t11_5"
                                value={t11_5}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                        <div className='col border border-dark'>
                            <input
                                type="text"
                                className="form-control form-control-sm border-0 p-0 text-center "
                                id="t11_6"
                                name="t11_6"
                                value={t11_6}
                                onChange={handleInputChange}
                                required={true}
                                autoComplete="on"
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col border border-dark'>OBSERVACIONES: <br />  <input
                        type="text"
                        className="form-control form-control-sm border-0 p-0 text-center "
                        id="obs"
                        name="obs"
                        value={obs}
                        onChange={handleInputChange}
                        required={true}
                        autoComplete="on"
                    /> <br /> <br /> <br /> <br /></div>

                </div>
                <div className='row'>
                    <div className='col border border-dark'>OBSERVACIONES CALIDAD:<br /> <br /> <br /> <br /> <br /></div>

                </div>
                <div className='row py-2'>
                    <div className='col '>PROCESO RESPONSABLE DE LA APROBACION</div>
                </div>
                <div className='row my-2'>
                    <div className='col'>Vo Bo. </div>
                    <div className='col border border-dark'>FIRMA DESARROLLO:</div>
                </div>
                <div className='row my-2'>
                    <div className='col '>Vo Bo. </div>
                    <div className='col border border-dark'>FIRMA CALIDAD:</div>
                </div>
                <div className='row my-2'>
                    <div className='col '>Vo Bo. </div>
                    <div className='col border border-dark'>FIRMA DISEÑO:</div>
                </div>
                <div className='row my-2'>
                    <div className='col '>Vo Bo. </div>
                    <div className='col border border-dark'>FIRMA PRODUCCIÓN:</div>
                </div>
                <div className='row'>
                    <div className='col '>FECHA DE APROBACION:</div>
                </div>

                <div className='row border border-dark '>
                    <div className='row text-center m-0 p-0'>
                        <div className='col border border-dark'>OBSERVACIONES GENERALES: </div>
                    </div>
                    <div className='row text-center m-0 p-0'>
                        <div className='col border '><br /></div>
                    </div>
                    <div className='row text-center m-0 p-0'>
                        <div className='col border '><br /></div>
                    </div>
                    <div className='row text-center m-0 p-0'>
                        <div className='col border '><br /></div>
                    </div>
                    <div className='row text-center m-0 p-0'>
                        <div className='col border '><br /></div>
                    </div>
                    <div className='row text-center m-0 p-0'>
                        <div className='col border '><br /></div>
                    </div>
                    <div className='row text-center m-0 p-0'>
                        <div className='col border '><br /></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col border border-dark'>ELABORO:</div>
                    <div className='col border border-dark'>REVISO:</div>
                    <div className='col border border-dark'>APROBO:</div>
                </div>
            </div>
            <footer>
                <div className='text-center p-1'>
                    <button className='btn btn-primary text-center' onClick={update}>Actualizar</button>
                </div>
                <div className='text-center p-1'>
                    <button className='btn btn-primary text-center' onClick={guardar}>GUARDAR</button>
                </div>

            </footer>
        </div >
    )
}

export default Seguimiento