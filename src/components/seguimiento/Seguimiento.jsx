import React from 'react'
import './seguimiento.css';
import { useForm } from '../../hooks/useForm';
const Seguimiento = () => {

    const [formValues, handleInputChange, reset] = useForm({
        zona1: "",
        zona2: "",
        zona3: "",
        zona4: "",
        zona5: "",
        zona6: "",
        zona7: "",
        zona8: "",
        zona9: "",
        zona10: ""
    });
    const { zona1, zona2, zona3, zona4, zona5, zona6, zona7, zona8, zona9, zona10 } = formValues;


    return (
        <div className='px-5'>
            <div className='row'>
                <div className='col-3'> imagen</div>
                <div className='col-9'>PRE- FICHA TECNICA DE SEGUIMIENTO A DESARROLLOS Y APROBACIONES CIRCULARES PEQUEÑO DIAMETRO</div>
            </div>
            <div className='py-4'>
                <div className='row'>
                    <div className='col-5'>CAUSA:</div>
                    <div className='col-1 border border-dark  justify-content-end'></div>
                    <div className='col-2 justify-content-end'>MEDIA</div>
                    <div className='col-1'></div>
                    <div className='col-2'></div>
                </div>

                <div className='row'>
                    <div className='col-5'></div>
                    <div className='col-1 border border-dark justify-content-end'></div>
                    <div className='col-2 '>BODY</div>
                    <div className='col-1 border border-dark justify-content-end'></div>
                    <div className='col-2 '>SEAMLESS</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-1'>FECHA:</div>
                <div className='col-2  border-dark border-bottom'></div>
                <div className='col-3 '></div>
                <div className='col-1 text-end'>D.P.</div>
                <div className='col-2  border-dark border-bottom'></div>
            </div>
            <div className='row'>
                <div className='col-1'>PRODUCTO:</div>
                <div className='col-2  border-dark border-bottom'></div>
            </div>
            <div className='row py-2'>
                <div className='col-1'></div>
                <div className='col-2 '></div>
                <div className='col-3 '></div>
                <div className='col-1 text-end'>REF.</div>
                <div className='col-2  border-dark border-bottom'></div>
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
                    <div className='col border border-dark mx-4'></div>
                    <div className='col border border-dark mx-4'></div>
                    <div className='col border border-dark mx-4'></div>
                </div>
                <div className='row'>
                    <div className='col-2'>TALLAS:</div>
                    <div className='col border border-dark'>S</div>
                    <div className='col border border-dark'>M</div>
                    <div className='col border border-dark'>L</div>
                    <div className='col border border-dark'>XL</div>
                    <div className='col border border-dark'></div>
                    <div className='col border border-dark'></div>
                    <div className='col text-end'>MAQ.</div>
                    <div className='col-1'>LONATI</div>
                    <div className='col border border-dark mx-4'></div>
                    <div className='col border border-dark mx-4'></div>
                    <div className='col border border-dark mx-4'></div>
                </div>
                <div className='row'>
                    <div className='col-2'>CANTIDAD ENTREGADA:</div>
                    <div className='col border border-dark'>1</div>
                    <div className='col border border-dark'>1</div>
                    <div className='col border border-dark'>1</div>
                    <div className='col border border-dark'>1</div>
                    <div className='col border border-dark'></div>
                    <div className='col border border-dark'></div>
                    <div className='col '></div>
                    <div className='col-1 '>MATEC</div>
                    <div className='col border border-dark mx-4'></div>
                    <div className='col border border-dark mx-4'></div>
                    <div className='col border border-dark mx-4'></div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6 border border-dark'>1. ESTRUCTURA</div>
                <div className='col-6 border border-dark'>CAIDAS</div>
            </div>

            <div className="row row-cols-13">

                <div className='col border border-dark rejilla'>PARTE</div>
                <div className='col-3 border border-dark rejilla-1'>HILOS</div>
                <div className='col border border-dark rejilla-3'>TORSION</div>
                <div className='col border border-dark rejilla-4'>PROVEEDOR</div>
                <div className='col border border-dark rejilla-5'>LOTE</div>
                <div className='col border border-dark rejilla-2'>1</div>
                <div className='col border border-dark rejilla-2'>2</div>
                <div className='col border border-dark rejilla-2'>3</div>
                <div className='col border border-dark rejilla-2'>4</div>
                <div className='col border border-dark rejilla-2'>5</div>
                <div className='col border border-dark rejilla-2'>6</div>
                <div className='col border border-dark rejilla-2'>7</div>
                <div className='col border border-dark rejilla-2'>8</div>
            </div>
            <div className="row row-cols-13">
                <div className='col border border-dark'>PARTE</div>
                <div className='col-3 border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'><div className='row'>
                    <div className='col border'>.</div>
                </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col border border-dark'>PARTE</div>
                <div className='col-3 border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'><div className='row'>
                    <div className='col border'>.</div>
                </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col border border-dark'>PARTE</div>
                <div className='col-3 border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'><div className='row'>
                    <div className='col border'>.</div>
                </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col border border-dark'>PARTE</div>
                <div className='col-3 border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'><div className='row'>
                    <div className='col border'>.</div>
                </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col border border-dark'>PARTE</div>
                <div className='col-3 border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'><div className='row'>
                    <div className='col border'>.</div>
                </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
                <div className='col border border-dark'>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border'>.</div>
                    </div>
                </div>
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
                    <div className='col border border-dark'>S</div>
                    <div className='col border border-dark'>M</div>
                    <div className='col border border-dark'>L</div>
                    <div className='col border border-dark'>XL</div>
                    <div className='col border border-dark'>XL</div>
                    <div className='col border border-dark'>XL</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 "
                            id="zona1"
                            name="zona1"
                            value={zona1}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 "
                            id="zona2"
                            name="zona2"
                            value={zona2}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 "
                            id="zona3"
                            name="zona3"
                            value={zona3}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 "
                            id="zona4"
                            name="zona4"
                            value={zona4}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 "
                            id="zona5"
                            name="zona5"
                            value={zona5}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 "
                            id="zona6"
                            name="zona6"
                            value={zona6}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 "
                            id="zona7"
                            name="zona7"
                            value={zona7}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0 "
                            id="zona8"
                            name="zona8"
                            value={zona8}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                </div>
                <div className='row'>
                    <div className='col-2 border border-dark p-0'>
                        <input
                            type="text"
                            className="form-control form-control-sm border-0"
                            id="zona9"
                            name="zona9"
                            value={zona9}
                            onChange={handleInputChange}
                            required={true}
                            autoComplete="on"
                        />
                    </div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
                    <div className='col border border-dark'>.</div>
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
                        <div className='col border border-dark'>No. MAQ.</div>
                        <div className='col border border-dark'></div>
                        <div className='col border border-dark'></div>
                    </div>
                    <div className='row'>
                        <div className='col border border-dark'>COLOR</div>
                        <div className='col border border-dark'></div>
                        <div className='col border border-dark'></div>
                    </div>
                    <div className='row'>
                        <div className='col border border-dark'>TIPO DE HORMA</div>
                        <div className='col border border-dark'></div>
                        <div className='col border border-dark'></div>
                    </div>
                    <div className='row' >
                        <div className='col border border-dark'>MAQ.   PREHORMADO</div>
                        <div className='col border border-dark'></div>
                        <div className='col border border-dark'></div>
                    </div>
                    <div className='row'>
                        <div className='col border border-dark'>TIPO DE ACABADO</div>
                        <div className='col border border-dark'></div>
                        <div className='col border border-dark'></div>
                    </div>
                </div>
                <div className='col-7  p-0'>
                    <div className='col border border-dark'>OBSERVACIONES: TEÑIDO Y SECADO TOMBLER <br /><br /><br /><br /><br />
                    </div>
                    <div className='col  '>CONTROLADOR O LIDER DE AREA</div>
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
                    <div className='col border border-dark'>4. MODELOS.</div>
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
                        <div className='col border border-dark'>S</div>
                        <div className='col border border-dark'>M</div>
                        <div className='col border border-dark'>L</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>

                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{zona1}</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{zona2}</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{zona3}</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{zona4}</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{zona5}</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{zona6}</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark '>{zona7}</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                        <div className='col border border-dark'>.</div>
                    </div>
                    <div className='row'>
                        <div className='col border border-dark'>ELONGACIONES LABORATORIO %</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark'></div>
                        <div className='col border border-dark'>S</div>
                        <div className='col border border-dark'>M</div>
                        <div className='col border border-dark'>L</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark'></div>
                        <div className='col border border-dark'>S</div>
                        <div className='col border border-dark'>M</div>
                        <div className='col border border-dark'>L</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark'></div>
                        <div className='col border border-dark'>S</div>
                        <div className='col border border-dark'>M</div>
                        <div className='col border border-dark'>L</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>
                    </div>
                    <div className='row'>
                        <div className='col-2 border border-dark'></div>
                        <div className='col border border-dark'>S</div>
                        <div className='col border border-dark'>M</div>
                        <div className='col border border-dark'>L</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>
                        <div className='col border border-dark'>XL</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col border border-dark'>OBSERVACIONES: <br /> <br /> <br /> <br /> <br /></div>

                </div>
                <div className='row'>
                    <div className='col border border-dark'>OBSERVACIONES CALIDAD:<br /> <br /> <br /> <br /> <br /></div>

                </div>
                <div className='row py-2'>
                    <div className='col '>PROCESO RESPONSABLE DE LA APROBACION.</div>

                </div>
                <div className='row my-2'>
                    <div className='col'>Vo Bo.</div>
                    <div className='col border border-dark'>FIRMA DESARROLLO:</div>
                </div>
                <div className='row my-2'>
                    <div className='col '>Vo Bo.</div>
                    <div className='col border border-dark'>FIRMA CALIDAD:</div>
                </div>
                <div className='row my-2'>
                    <div className='col '>Vo Bo.</div>
                    <div className='col border border-dark'>FIRMA DISEÑO:</div>
                </div>
                <div className='row my-2'>
                    <div className='col '>Vo Bo.</div>
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
        </div >
    )
}

export default Seguimiento