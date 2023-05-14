import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {faInfo} from '@fortawesome/free-solid-svg-icons/faInfo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'katex/dist/katex.min.css';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Alert,
    AppBar,
    Box, Button,
    FormControlLabel,
    Grid, IconButton, Modal,
    Radio,
    RadioGroup, Slider, Snackbar,
    TextField, Toolbar, Tooltip, Typography
} from "@mui/material";


interface RequestOptions {
    method: string;
    // headers: any;
    body?: string;
}

const baseFetch = (url: string, requestOptions: any) => {
    return fetch(url, requestOptions)
        .then(async response => {
            if (response.status === 204 || response.status === 201) {
                return {};
            } else if (response.status < 200 || response.status >= 300) {
                return Promise.reject(await response.json());
            }
            return await response.json();
        }).then(json => {
            return new Promise((resolve) => {
                resolve(json);
            });
        });
};

const post = (url: string, data?: any) => {
    const requestOptions: RequestOptions = {
        method: 'POST',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // },
        body: data ? JSON.stringify(data) : undefined
    };
    return baseFetch(url, requestOptions);
}

class PatientParameters {
    age?: number;
    weigh?: number;
    bsa?: number;
    dpPA?: number;
    PVR?: number;
    AOnadir?: number;
    pPa?: number;
    SATO?: number;
    qpQS?: number;
    NAKATA?: number;
    VEDP?: number;
    MVZscore?: number;
    sex: number = 1;
}

class coefficientsField {
    u4_P5_P4?: number;
    u1_P8_P1?: number;
    sin_P6?: number;
    u1_tan_S2?: number;
    u3_P3_S4?: number;
    cos_Q?: number;
    u2_1P4_P8?: number;
    u3_cos_P6?: number;
    u1_cos_S4?: number;
    u1_cos_P2?: number;
    P4_P5?: number;
    u1_tan_S1?: number;
    u3_S3_S4?: number;
    u2_sin_P6?: number;
    S4_sqrt?: number;
    S4_S2?: number;
    u3_P6_S1?: number;
    u3_S1_P7?: number;
    u3_sin_P1?: number;
    u4_S4_P8?: number;
    const_1?: number;
    u3_P3_S3?: number;
    u4_P7_sqrt?: number;
    u2_P3_Q?: number;
    u1_S1_P8?: number;
    sin_P5?: number;
    sin_S1?: number;
    tan_P6?: number;
    u1_P2_S1?: number;
    u4_sin_P6?: number;
    u4_P1_P5?: number;
    u4_S3_P5?: number;
    P8_P6?: number;
    u3_S2_S4?: number;
    cos_S3?: number;
    P6_S3?: number;
    u2_P2_P6?: number;
    S1_S3?: number;
    cos_P4?: number;
    u1_P8_P7?: number;
    P5_S1?: number;
    const_2?: number;
    P2_P7?: number;
    u4_P3_P8?: number;
    u2_P5_P7?: number;
    u2_cos_S2?: number;
    P1_P6?: number;
    u1_S4_S2?: number;
    u3_sin_P7?: number;
    u1_sin_P2?: number;
    P5_S4?: number;
    u4_S4_P5?: number;
    u3_tan_P4?: number;
    sin_Q?: number;
    u1_P5_S4?: number;
    sin_P7?: number;
    u1_cos_S4_mod3?: number;
    P5_S2?: number;
    u3_tan_P3?: number;
    u2_P4_P8?: number;
    u4_P5_S1?: number;
    u1_P1_S2?: number;
    const_3?: number;
    u1_P7_S3?: number;
    u2_P7_P8?: number;
    u4_P5_S1_mod4?: number;
    P2_P4?: number;
    u3_S4_sqrt?: number;
    P7_S4?: number;
    u2_P2_S3?: number;
    P4_P8?: number;
    u1_cos_P7?: number;
    tan_S1?: number;
    u1_sin_S4?: number;
    S4_sqrt_mod4?: number;
    u4_sin_P6_mod4?: number;
    u2_sin_P6_mod4?: number;
    P5_S2_mod4?: number;
    u4_cos_P7?: number;
    u1_P6_S3?: number;
    u4_sin_S4?: number;
    const_4?: number;
    P1_P5?: number;
    u2_S3_P7?: number;
    u4_P3_P5?: number;
    u3_sin_P7_mod5?: number;
    P5_P7?: number;
    u2_sin_S4?: number;
    u2_cos_P1?: number;
    u3_sin_P2?: number;
    u3_cos_S2?: number;
    sin_S1_mod5?: number;
    u2_tan_S3?: number;
    u2_sin_Q?: number;
    u3_sin_Q?: number;
    u1_sin_Q?: number;
    u3_P2_S4?: number;
    u3_sin_Q_mod5?: number;
    u4_tan_P4?: number;
    u1_tan_Q?: number;
    u2_sin_S3?: number;
    u2_tan_P6?: number;
    u2_sin_S4_mod5?: number;
    const_5?: number;
}

class Coefficients {
    u4_P5_P4: number = -40.179;
    u1_P8_P1: number = 24.648;
    sin_P6: number = 0.624;
    u1_tan_S2: number = 0.052;
    u3_P3_S4: number = -0.798;
    cos_Q: number = -0.047;
    u2_1P4_P8: number = 452.972;
    u3_cos_P6: number = 1.654;
    u1_cos_S4: number = 0.024;
    u1_cos_P2: number = 0.713;
    P4_P5: number = -0.004;
    u1_tan_S1: number = -0.22;
    u3_S3_S4: number = 0.068;
    u2_sin_P6: number = -0.257;
    S4_sqrt: number = -0.039;
    S4_S2: number = -55.295;
    u3_P6_S1: number = -0.149;
    u3_S1_P7: number = 29.079;
    u3_sin_P1: number = 0.178;
    u4_S4_P8: number = 0.197;
    const_1: number = 95.371;
    u3_P3_S3: number = 0.016;
    u4_P7_sqrt: number = 10.513;
    u2_P3_Q: number = 321.945;
    u1_S1_P8: number = 0.078;
    sin_P5: number = 0.009;
    sin_S1: number = -0.35;
    tan_P6: number = -0.006;
    u1_P2_S1: number = -2.213;
    u4_sin_P6: number = 0.006;
    u4_P1_P5: number = -0.002;
    u4_S3_P5: number = 0.022;
    P8_P6: number = -1.803;
    u3_S2_S4: number = -3.891;
    cos_S3: number = -0.001;
    P6_S3: number = -0.001;
    u2_P2_P6: number = -1.871;
    S1_S3: number = 0.006;
    cos_P4: number = -0.027;
    u1_P8_P7: number = 0.951;
    P5_S1: number = 0.012;
    const_2: number = 1.112;
    P2_P7: number = 40.985;
    u4_P3_P8: number = -78.312;
    u2_P5_P7: number = 13571.15;
    u2_cos_S2: number = -133.817;
    P1_P6: number = 21.045;
    u1_S4_S2: number = -4518.283;
    u3_sin_P7: number = -84.619;
    u1_sin_P2: number = 54.093;
    P5_S4: number = 4.696;
    u4_S4_P5: number = -14.869;
    u3_tan_P4: number = 13.227;
    sin_Q: number = -37.604;
    u1_P5_S4: number = -7.678;
    sin_P7: number = -1.6;
    u1_cos_S4_mod3: number = 57.676;
    P5_S2: number = 10214.841;
    u3_tan_P3: number = -0.327;
    u2_P4_P8: number = -11.292;
    u4_P5_S1: number = -38.172;
    u1_P1_S2: number = -56.887;
    const_3: number = 75.2;
    u1_P7_S3: number = -0.022;
    u2_P7_P8: number = -1703.357;
    u4_P5_S1_mod4: number = -0.935;
    P2_P4: number = 10.486;
    u3_S4_sqrt: number = 0.037;
    P7_S4: number = -5.294;
    u2_P2_S3: number = 16956.611;
    P4_P8: number = 0.051;
    u1_cos_P7: number = 1.619;
    tan_S1: number = 0.204;
    u1_sin_S4: number = 0.304;
    S4_sqrt_mod4: number = 0.055;
    u4_sin_P6_mod4: number = -0.151;
    u2_sin_P6_mod4: number = 0.672;
    P5_S2_mod4: number = -0.002;
    u4_cos_P7: number = 1.834;
    u1_P6_S3: number = -0.962;
    u4_sin_S4: number = 0.153;
    const_4: number = 12.88;
    P1_P5: number = -112.729;
    u2_S3_P7: number = 34.935;
    u4_P3_P5: number = 0.598;
    u3_sin_P7_mod5: number = 0.174;
    P5_P7: number = 9.531;
    u2_sin_S4: number = -2.286;
    u2_cos_P1: number = 21.918;
    u3_sin_P2: number = 0.39;
    u3_cos_S2: number = 2.511;
    sin_S1_mod5: number = 2.042;
    u2_tan_S3: number = -0.227;
    u2_sin_Q: number = 6.917;
    u3_sin_Q: number = -0.443;
    u1_sin_Q: number = 0.162;
    u3_P2_S4: number = 0.01;
    u3_sin_Q_mod5: number = 1.121;
    u4_tan_P4: number = -0.203;
    u1_tan_Q: number = -0.184;
    u2_sin_S3: number = 11.249;
    u2_tan_P6: number = 2.511;
    u2_sin_S4_mod5: number = 10.376;
    const_5: number = -4.331;
}

class restrict {
    min_s1?: number;
    max_s1?: number;
    min_s2?: number;
    max_s2?: number;
    min_s3?: number;
    max_s3?: number;
    min_s4?: number;
    max_s4?: number;
    min_u1?: number;
    max_u1?: number;
    min_u2?: number;
    max_u2?: number;
    min_u3?: number;
    max_u3?: number;
    min_u4?: number;
    max_u4?: number;
}

class steps {
    step_s1?: number;
    step_s2?: number;
    step_s3?: number;
    step_s4?: number;
    step_u1?: number;
    step_u2?: number;
    step_u3?: number;
    step_u4?: number;
}

function App() {
    const [s1, setS1] = React.useState<number[]>([0.9,  1.2]);
    const [s2, setS2] = React.useState<number[]>([300, 360]);
    const [s3, setS3] = React.useState<number[]>([8, 12]);
    const [s4, setS4] = React.useState<number[]>([-1, 1]);
    const [u1, setU1] = React.useState<number[]>([0, 1.3]);
    const [u2, setU2] = React.useState<number[]>([0, 0.1]);
    const [u3, setU3] = React.useState<number[]>([0, 1.08]);
    const [u4, setU4] = React.useState<number[]>([0, 1.2]);
    const [disabledButton, setDisabledButton] = React.useState(true)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openFormulas, setOpenFormulas] = React.useState(false);
    const handleOpenFormulas = () => setOpenFormulas(true);
    const handleCloseFormulas = () => setOpenFormulas(false);

    const [result, setResult] = useState<any>();
    const [message, setMessage] = useState<any>()
    const [openBar, setOpenBar] = React.useState(false);


    const [patient, setPatient] = useState<PatientParameters>(new PatientParameters());
    const [coefficient, setCoefficient] = useState<coefficientsField>(new coefficientsField());
    const [restrictNumber, setRestrictNumber] = useState<restrict>(new restrict())
    const [stepNumber, setStepNumber] = useState<steps>(new steps())

    const setS1Value = (event: Event, newValue: number | number[]) => {
        setS1(newValue as number[]);
    };

    const setS2Value = (event: Event, newValue: number | number[]) => {
        setS2(newValue as number[]);
    };

    const setS3Value = (event: Event, newValue: number | number[]) => {
        setS3(newValue as number[]);
    };

    const setS4Value = (event: Event, newValue: number | number[]) => {
        setS4(newValue as number[]);
    };

    const setU1Value = (event: Event, newValue: number | number[]) => {
        setU1(newValue as number[]);
    };

    const setU2Value = (event: Event, newValue: number | number[]) => {
        setU2(newValue as number[]);
    };

    const setU3Value = (event: Event, newValue: number | number[]) => {
        setU3(newValue as number[]);
    };

    const setU4Value = (event: Event, newValue: number | number[]) => {
        setU4(newValue as number[]);
    };

    const handleCloseBar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenBar(false);
    };


    const marksS1 = [
        {value: restrictNumber.min_s1 || 0.3, label: restrictNumber?.min_s1 || restrictNumber?.min_s1 === 0 ? restrictNumber.min_s1.toString() : '0.3'},
        {value: restrictNumber.max_s1 || 1.5, label: restrictNumber?.max_s1 || restrictNumber?.max_s1 === 0 ? restrictNumber.max_s1.toString() : '1.5'},
    ];
    const marksS2 = [
        {value: restrictNumber.min_s2 || 280, label: restrictNumber?.min_s2 || restrictNumber?.min_s2 === 0 ? restrictNumber.min_s2.toString() : '280'},
        {value: restrictNumber.max_s2 || 360, label: restrictNumber?.max_s2 || restrictNumber?.max_s2 === 0 ? restrictNumber.max_s2.toString() : '360'},
    ];
    const marksS3 = [
        {value: restrictNumber.min_s3 || 4, label: restrictNumber?.min_s3 || restrictNumber?.min_s3 === 0 ? restrictNumber.min_s3.toString() : '4'},
        {value: restrictNumber.max_s3 || 20, label: restrictNumber?.max_s3 || restrictNumber?.max_s3 === 0 ? restrictNumber.max_s3.toString() : '20'},
    ];
    const marksS4 = [
        {value: restrictNumber.min_s4 || -1, label: restrictNumber?.min_s4 || restrictNumber?.min_s4 === 0 ? restrictNumber.min_s4.toString() : '-1.0',},
        {value: restrictNumber.max_s4 || 1, label: restrictNumber?.max_s4 || restrictNumber?.max_s4 === 0 ? restrictNumber.max_s4.toString() : '1.0',},
    ];

    const marksU1 = [
        {value: restrictNumber.min_u1 || 0, label: restrictNumber?.min_u1 || restrictNumber?.min_u1 === 0 ? restrictNumber.min_u1.toString() : '0.0',},
        {value: restrictNumber.max_u1 || 2, label: restrictNumber?.max_u1 || restrictNumber?.max_u1 === 0 ? restrictNumber.max_u1.toString() : '2.0',},
    ];

    const marksU2 = [
        {value: restrictNumber.min_u2 || 0, label: restrictNumber?.min_u2 || restrictNumber?.min_u2 === 0 ? restrictNumber.min_u2.toString() : '0.0'},
        {value: restrictNumber.max_u2 || 0.2, label: restrictNumber?.max_u2 || restrictNumber?.max_u2 === 0 ? restrictNumber.max_u2.toString() : '0.2'},
    ];

    const marksU3 = [
        {value: restrictNumber.min_u3 || 0, label: restrictNumber?.min_u3 || restrictNumber?.min_u3 === 0 ? restrictNumber.min_u3.toString() : '0.0',},
        {value: restrictNumber.max_u3 || 1.2, label: restrictNumber?.max_u3 || restrictNumber?.max_u3 === 0 ? restrictNumber.max_u3.toString() : '1.2',},
    ];

    const marksU4 = [
        {value: restrictNumber.min_u4 ||  0, label: restrictNumber?.min_u4 || restrictNumber?.min_u4 === 0 ? restrictNumber.min_u4.toString() : '0.0',},
        {value: restrictNumber.max_u4 || 1.6, label: restrictNumber?.max_u4 || restrictNumber?.max_u4 === 0 ? restrictNumber.max_u4.toString() : '1.6',},
    ];

    const onChangePatient = (key: string, event: any) => {
        patient[key as keyof PatientParameters] = parseFloat(event.target.value);
        setPatient({...patient});
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if ((event.target as HTMLInputElement).value === '1') patient.sex = 1;
        else patient.sex = 2;
        setPatient({...patient});
    };

    const onChangeCoefficient = (key: string, event: any) => {
        coefficient[key as keyof coefficientsField] = parseFloat(event.target.value);
        setCoefficient({...coefficient});
    }

    const setDefaultValues = () => {
        setCoefficient({...new Coefficients()});
    }

    const setStepValue = (key: string, event: any) => {
        stepNumber[key as keyof steps] = parseFloat(event.target.value);
        setStepNumber({...stepNumber});
    }

    const setRestrictValue = (key: string, event: any) => {
        restrictNumber[key as keyof restrict] = parseFloat(event.target.value);
        if (key === 'min_s1') {
            s1[0] = parseFloat(event.target.value);
            setS1(s1);
        } else if (key === 'max_s1') {
            s1[1] = parseFloat(event.target.value);
            setS1(s1);
        } else if (key === 'min_s2') {
            s2[0] = parseFloat(event.target.value);
            setS2(s2);
        } else if (key === 'max_s2') {
            s2[1] = parseFloat(event.target.value);
            setS2(s2);
        } else if (key === 'min_s3') {
            s3[0] = parseFloat(event.target.value);
            setS3(s3);
        } else if (key === 'max_s3') {
            s3[1] = parseFloat(event.target.value);
            setS3(s3);
        } else if (key === 'min_s4') {
            s4[0] = parseFloat(event.target.value);
            setS4(s4);
        } else if (key === 'max_s4') {
            s4[1] = parseFloat(event.target.value);
            setS4(s4);
        } else if (key === 'min_u1') {
            u1[0] = parseFloat(event.target.value);
            setU1(u1);
        } else if (key === 'max_u1') {
            u1[1] = parseFloat(event.target.value);
            setU1(u1);
        } else if (key === 'min_u2') {
            u2[0] = parseFloat(event.target.value);
            setU2(u2);
        } else if (key === 'max_u2') {
            u2[1] = parseFloat(event.target.value);
            setU2(u2);
        } else if (key === 'min_u3') {
            u3[0] = parseFloat(event.target.value);
            setU3(u3);
        } else if (key === 'max_u3') {
            u3[1] = parseFloat(event.target.value);
            setU3(u3);
        } else if (key === 'min_u4') {
            u4[0] = parseFloat(event.target.value);
            setU4(u4);
        } else if (key === 'max_u4') {
            u4[1] = parseFloat(event.target.value);
            setU4(u4);
        }
        setRestrictNumber({...restrictNumber})
    }

    function model_1(): {u1: number, u2: number, u3: number, u4: number, const_mod: number} {
        let u1: number;
        let u2: number;
        let u3: number;
        let u4: number;
        let const_mod: number;

        const coef = new Coefficients();

        u1 = (coefficient.u1_P8_P1 || coef.u1_P8_P1) * ((patient?.sex ? 0 : 1) / (patient.age || 117.9)) +
            (coefficient.u1_tan_S2 || coef.u1_tan_S2) * Math.tan(patient.NAKATA || 302.185) +
            (coefficient.u1_cos_S4 || coef.u1_cos_S4) * (1 / Math.cos(patient.MVZscore || -0.873)) +
            (coefficient.u1_cos_P2 || coef.u1_cos_P2) * Math.cos(patient.weigh || 30.355) +
            (coefficient.u1_tan_S1 || coef.u1_tan_S1) * Math.tan(patient.qpQS || 0.845);
        u2 = (coefficient.u2_1P4_P8 || coef.u2_1P4_P8) * (1 / ((patient.dpPA || 77.179) * (patient.sex || 1))) +
            (coefficient.u2_sin_P6 || coef.u2_sin_P6) * (1 / Math.sin(patient.AOnadir || 19.82));
        u3 = (coefficient.u3_P3_S4 || coef.u3_P3_S4) * (patient.bsa || 1.049) * (patient.MVZscore || -0.873) +
            (coefficient.u3_cos_P6 || coef.u3_cos_P6) * Math.cos(patient.AOnadir || 19.82) +
            (coefficient.u3_S3_S4 || coef.u3_S3_S4) * (patient.VEDP || 13.562) * (patient.MVZscore || -0.873) +
            (coefficient.u3_P6_S1 || coef.u3_P6_S1) * (patient.AOnadir || 19.82) * (patient.qpQS || 0.845) +
            (coefficient.u3_S1_P7 || coef.u3_S1_P7) * (patient.qpQS || 0.845) / (patient.pPa || 14.773) +
            (coefficient.u3_sin_P1 || coef.u3_sin_P1) * (1 / (patient.age || 117.9));
        u4 = (coefficient.u4_P5_P4 || coef.u4_P5_P4) * ((patient.PVR || 1.641) / (patient.dpPA || 77.179)) +
            (coefficient.u4_S4_P8 || coef.u4_S4_P8) * ((patient.MVZscore || -0.873) / (patient.sex || 1));
        const_mod = (coefficient.sin_P6 || coef.sin_P6) * Math.sin(patient.AOnadir || 19.82) +
            + (coefficient.cos_Q || coef.cos_Q) / Math.cos(patient.SATO || 79.398) +
            + (coefficient.P4_P5 || coef.P4_P5) * (patient.dpPA || 77.179) * (patient.PVR || 1.641) +
            + (coefficient.S4_sqrt || coef.S4_sqrt) * Math.pow(patient.MVZscore || -0.873, 2) +
            + (coefficient.S4_S2 || coef.S4_S2) * ((patient.MVZscore || -0.873) / (patient.NAKATA || 302.185)) +
            + (coefficient.const_1 || coef.const_1);
        return {u1, u2, u3, u4, const_mod}
    }

    function model_2(): {u1: number, u2: number, u3: number, u4: number, const_mod: number} {
        let u1: number;
        let u2: number;
        let u3: number;
        let u4: number;
        let const_mod: number;

        const coef = new Coefficients();

        u1 = (coefficient.u1_S1_P8 || coef.u1_S1_P8) * (patient.qpQS || 0.845) * (patient.sex || 1) +
            (coefficient.u1_P2_S1 || coef.u1_P2_S1) * (1 / ((patient.weigh || 30.355) * (patient.qpQS || 0.845))) +
            (coefficient.u1_P8_P7 || coef.u1_P8_P7) * ((patient.sex || 1) / (patient.pPa || 14.773));
        u2 = (coefficient.u2_P3_Q || coef.u2_P3_Q) * ((patient.bsa || 1.049) / (patient.SATO || 79.398)) +
            (coefficient.u2_P2_P6 || coef.u2_P2_P6) * ((patient.weigh || 30.355) / (patient.AOnadir || 19.82));
        u3 = (coefficient.u3_P3_S3 || coef.u3_P3_S3) * (patient.bsa || 1.049) * (patient.VEDP || 13.562) +
            (coefficient.u3_S2_S4 || coef.u3_S2_S4) * (1 / ((patient.NAKATA || 302.185) * (patient.MVZscore || -0.873)));
        u4 = (coefficient.u4_P7_sqrt || coef.u4_P7_sqrt) * (1 / Math.pow(patient.pPa || 14.773, 2)) +
            (coefficient.u4_sin_P6 || coef.u4_sin_P6) * (1 / Math.sin(patient.AOnadir || 19.82)) +
            (coefficient.u4_P1_P5 || coef.u4_P1_P5) * ((patient.age || 117.9) / (patient.PVR || 1.641)) +
            (coefficient.u4_S3_P5 || coef.u4_S3_P5) * ((patient.VEDP || 13.562) / (patient.PVR || 1.641));
        const_mod = (coefficient.sin_P5 || coef.sin_P5) * (1 / Math.sin(patient.PVR || 1.641)) +
            (coefficient.sin_S1 || coef.sin_S1) * Math.sin(patient.qpQS || 0.845) +
            (coefficient.tan_P6 || coef.tan_P6) * Math.tan(patient.AOnadir || 19.82) +
            (coefficient.P8_P6 || coef.P8_P6) * ((patient?.sex ? 0 : 1) / (patient.AOnadir || 19.82)) +
            (coefficient.cos_S3 || coef.cos_S3) * (1 / Math.cos(patient.VEDP || 13.562)) +
            (coefficient.P6_S3 || coef.P6_S3) * (patient.AOnadir || 19.82) * (patient.VEDP || 13.562) +
            (coefficient.S1_S3 || coef.S1_S3) * (patient.qpQS || 0.845) * (patient.VEDP || 13.562) +
            (coefficient.cos_P4 || coef.cos_P4) * Math.cos(patient.dpPA || 77.179) +
            (coefficient.P5_S1 || coef.P5_S1) * ((patient.PVR || 1.641) / (patient.qpQS || 0.845)) +
            (coefficient.const_2 || coef.const_2);
        return {u1, u2, u3, u4, const_mod}
    }

    function model_3(): {u1: number, u2: number, u3: number, u4: number, const_mod: number} {
        let u1: number;
        let u2: number;
        let u3: number;
        let u4: number;
        let const_mod: number;

        const coef = new Coefficients();

        u1 = (coefficient.u1_S4_S2 || coef.u1_S4_S2) * (patient.MVZscore || -0.873) / (patient.NAKATA || 302.185) +
            (coefficient.u1_sin_P2 || coef.u1_sin_P2) * Math.sin(patient.weigh || 30.355) +
            (coefficient.u1_P5_S4 || coef.u1_P5_S4) * ((patient.PVR || 1.641) / (patient.MVZscore || -0.873)) +
            (coefficient.u1_cos_S4_mod3 || coef.u1_cos_S4_mod3) * Math.cos(patient.MVZscore || -0.873) +
            (coefficient.u1_P1_S2 || coef.u1_P1_S2) * ((patient.age || 117.9) / (patient.NAKATA || 302.185));
        u2 = (coefficient.u2_P5_P7 || coef.u2_P5_P7) * ((patient.PVR || 1.641) / (patient.pPa || 14.773)) +
            (coefficient.u2_cos_S2 || coef.u2_cos_S2) * (1 / Math.cos(patient.NAKATA || 302.185)) +
            (coefficient.u2_P4_P8 || coef.u2_P4_P8) * ((patient.dpPA || 77.179) / (patient.sex || 1));
        u3 = (coefficient.u3_sin_P7 || coef.u3_sin_P7) * Math.sin(patient.pPa || 14.773) +
            (coefficient.u3_tan_P4 || coef.u3_tan_P4) * Math.tan(patient.dpPA || 77.179) +
            (coefficient.u3_tan_P3 || coef.u3_tan_P3) * Math.tan(patient.bsa || 1.049);
        u4 = (coefficient.u4_P3_P8 || coef.u4_P3_P8) * ((patient.bsa || 1.049) * (patient.sex || 1)) +
            (coefficient.u4_S4_P5 || coef.u4_S4_P5) * ((patient.MVZscore || -0.873) / (patient.PVR || 1.641)) +
            (coefficient.u4_P5_S1 || coef.u4_P5_S1) * (patient.PVR || 1.641) * (patient.qpQS || 0.845);
        const_mod = (coefficient.P2_P7 || coef.P2_P7) * ((patient.weigh || 30.355) / (patient.pPa || 14.773)) +
            (coefficient.P1_P6 || coef.P1_P6) * ((patient.age || 117.9) / (patient.AOnadir || 19.82)) +
            (coefficient.P5_S4 || coef.P5_S4) * (patient.PVR || 1.641) * (patient.MVZscore || -0.873) +
            (coefficient.sin_Q || coef.sin_Q) * Math.sin(patient.SATO || 79.398) +
            (coefficient.sin_P7 || coef.sin_P7) * (1 / Math.sin(patient.pPa || 14.773)) +
            (coefficient.P5_S2 || coef.P5_S2) * ((patient.PVR || 1.641) / (patient.NAKATA || 302.185)) +
            (coefficient.const_3 || coef.const_3);
        return {u1, u2, u3, u4, const_mod}
    }

    function model_4(): {u1: number, u2: number, u3: number, u4: number, const_mod: number} {
        let u1: number;
        let u2: number;
        let u3: number;
        let u4: number;
        let const_mod: number;

        const coef = new Coefficients();

        u1 = (coefficient.u1_P7_S3 || coef.u1_P7_S3) * (patient.pPa || 14.773) * (patient.VEDP || 13.562) +
            (coefficient.u1_cos_P7 || coef.u1_cos_P7) * Math.cos(patient.pPa || 14.773) +
            (coefficient.u1_sin_S4 || coef.u1_sin_S4) * (1 / Math.sin(patient.MVZscore || -0.873)) +
            (coefficient.u1_P6_S3 || coef.u1_P6_S3) * ((patient.AOnadir || 19.82) / (patient.VEDP || 13.562));
        u2 = (coefficient.u2_P7_P8 || coef.u2_P7_P8) * (1 / ((patient.pPa || 14.773) * (patient.sex || 1))) +
            (coefficient.u2_P2_S3 || coef.u2_P2_S3) * (1 / ((patient.weigh || 30.355) * (patient.VEDP || 13.562))) +
            (coefficient.u2_sin_P6_mod4 || coef.u2_sin_P6_mod4) * (1 / Math.sin(patient.AOnadir || 19.82));
        u3 = (coefficient.u3_S4_sqrt || coef.u3_S4_sqrt) * (1 / Math.pow(patient.MVZscore || -0.873, 2));
        u4 = (coefficient.u4_P5_S1_mod4 || coef.u4_P5_S1_mod4) * (patient.PVR || 1.641) * (patient.qpQS || 0.845) +
            (coefficient.u4_sin_P6_mod4 || coef.u4_sin_P6_mod4) * (1 / Math.sin(patient.AOnadir || 19.82)) +
            (coefficient.u4_cos_P7 || coef.u4_cos_P7) * Math.cos(patient.pPa || 14.773) +
            (coefficient.u4_sin_S4 || coef.u4_sin_S4) * (1 / Math.sin(patient.MVZscore || -0.873));
        const_mod = (coefficient.P2_P4 || coef.P2_P4) * (patient.weigh || 30.355) / (patient.dpPA || 77.179) +
            (coefficient.P7_S4 || coef.P7_S4) * (1 / ((patient.pPa || 14.773) * (patient.MVZscore || -0.873))) +
            (coefficient.P4_P8 || coef.P4_P8) * ((patient.dpPA || 77.179) / (patient.sex || 1)) +
            (coefficient.tan_S1 || coef.tan_S1) * Math.tan(patient.qpQS || 0.845) +
            (coefficient.S4_sqrt_mod4 || coef.S4_sqrt_mod4) * Math.pow(patient.MVZscore || -0.873, 2) +
            (coefficient.P5_S2_mod4 || coef.P5_S2_mod4) * (patient.PVR || 1.641) * (patient.NAKATA || 302.185) +
            (coefficient.const_4 || coef.const_4)
        return {u1, u2, u3, u4, const_mod}
    }

    function model_5(): {u1: number, u2: number, u3: number, u4: number, const_mod: number} {
        let u1: number;
        let u2: number;
        let u3: number;
        let u4: number;
        let const_mod: number;

        const coef = new Coefficients();

        u1 = (coefficient.u1_sin_Q || coef.u1_sin_Q) * (1 / Math.sin(patient.SATO || 79.398)) +
            + (coefficient.u1_tan_Q || coef.u1_tan_Q) * Math.tan(patient.SATO || 79.398);
        u2 = (coefficient.u2_S3_P7 || coef.u2_S3_P7) * ((patient.VEDP || 13.562)/(patient.pPa || 14.773)) +
            + (coefficient.u2_sin_S4 || coef.u2_sin_S4) * (1 / Math.sin(patient.MVZscore || -0.873)) +
            + (coefficient.u2_cos_P1 || coef.u2_cos_P1) * Math.cos(patient.age || 117.9) +
            + (coefficient.u2_tan_S3 || coef.u2_tan_S3) * Math.tan(patient.VEDP || 13.562) +
            + (coefficient.u2_sin_Q || coef.u2_sin_Q) * Math.sin(patient.SATO || 79.398) +
            + (coefficient.u2_sin_S3 || coef.u2_sin_S3) * Math.sin(patient.VEDP || 13.562) +
            + (coefficient.u2_tan_P6 || coef.u2_tan_P6) * Math.tan(patient.AOnadir || 19.82) +
            + (coefficient.u2_sin_S4_mod5 || coef.u2_sin_S4_mod5) * Math.sin(patient.MVZscore || -0.873);
        u3 = + (coefficient.u3_sin_P7_mod5 || coef.u3_sin_P7_mod5) * (1 / Math.sin(patient.pPa || 14.773)) +
            + (coefficient.u3_sin_P2 || coef.u3_sin_P2) * (1 / Math.sin(patient.weigh || 30.355)) +
            + (coefficient.u3_cos_S2 || coef.u3_cos_S2) * Math.cos(patient.NAKATA || 302.185) +
            + (coefficient.u3_sin_Q || coef.u3_sin_Q) * (1 / Math.sin(patient.SATO || 79.398)) +
            + (coefficient.u3_P2_S4 || coef.u3_P2_S4) * (patient.weigh || 30.355) * (patient.MVZscore || -0.873) +
            + (coefficient.u3_sin_Q_mod5 || coef.u3_sin_Q_mod5) * Math.sin(patient.SATO || 79.398);
        u4 = (coefficient.u4_P3_P5 || coef.u4_P3_P5) * (patient.bsa || 1.049) * (patient.PVR || 1.641) +
            (coefficient.u4_tan_P4 || coef.u4_tan_P4) * Math.tan(patient.dpPA || 77.179);
        const_mod = (coefficient.P1_P5 || coef.P1_P5) * (1 / ((patient.age || 117.9) / (patient.PVR || 1.641))) +
            + (coefficient.P5_P7 || coef.P5_P7) * ((patient.PVR || 1.641) / (patient.pPa || 14.773)) +
            + (coefficient.sin_S1_mod5 || coef.sin_S1_mod5) * Math.sin(patient.qpQS || 0.845) +
            + (coefficient.const_5 || coef.const_5);
        return {u1, u2, u3, u4, const_mod}
    }
    const model_res_1 = model_1();
    const model_res_2 = model_2();
    const model_res_3 = model_3();
    const model_res_4 = model_4();
    const model_res_5 = model_5();

    const inline_mod1 = (`Q =` + `(` + model_res_1.u1.toFixed(2) + `)*u1 + ` + `(` + model_res_1.u2.toFixed(2) + `)*u2 + `
        + `(` + model_res_1.u3.toFixed(2) + `)*u3 + ` + `(` + model_res_1.u4.toFixed(2) + `)*u4 + `
        + `(` + model_res_1.const_mod.toFixed(2) + `)`).toString()
    const inline_mod2 = (`S1 =` + `(` + model_res_2.u1.toFixed(2) + `)*u1 + ` + `(` + model_res_2.u2.toFixed(2) + `)*u2 + `
        + `(` + model_res_2.u3.toFixed(2) + `) *u3 + ` + `(` + model_res_2.u4.toFixed(2) + `)*u4 + `
        + `(` + model_res_2.const_mod.toFixed(2) + `)`).toString()
    const inline_mod3 = (`S2 =` + `(` + model_res_3.u1.toFixed(2) + `)*u1 + ` + `(` + model_res_3.u2.toFixed(2) + `)*u2 + `
        + `(` + model_res_3.u3.toFixed(2) + `)*u3 + ` + `(` + model_res_3.u4.toFixed(2) + `)*u4 + `
        + `(` + model_res_3.const_mod.toFixed(2) + `)`).toString()
    const inline_mod4 = (`S3 =` + `(` + model_res_4.u1.toFixed(2) + `)*u1 + ` + `(` + model_res_4.u2.toFixed(2) + `)*u2 + `
        + `(` + model_res_4.u3.toFixed(2) + `)*u3 + ` + `(` + model_res_4.u4.toFixed(2) + `)*u4 + `
        + `(` + model_res_4.const_mod.toFixed(2) + `)`).toString()
    const inline_mod5 = (`S4 =` + `(` + model_res_5.u1.toFixed(2) + `)*u1 + ` + `(` + model_res_5.u2.toFixed(2) + `)*u2 + `
        + `(` + model_res_5.u3.toFixed(2) + `)*u3 + ` + `(` + model_res_5.u4.toFixed(2) + `)*u4 + `
        + `(` + model_res_5.const_mod.toFixed(2)+ `)`).toString()

    const calculate = () => {
        const mod_1 = model_1();
        const mod_2 = model_2();
        const mod_3 = model_3();
        const mod_4 = model_4();
        const mod_5 = model_5();
        setDisabledButton(false);
        postData('http://127.0.0.1:5000', {patient: patient, restrictions: {s1, s2, s3, s4, u1, u2, u3, u4}, mod_1, mod_2, mod_3, mod_4, mod_5})
            .then(res => {
                if (res && res.result === 'no solution') {
                    setMessage("No solution found");
                    setOpenBar(true)
                    setResult(undefined)
                    // setTimeout(() => {
                    //     setMessage(undefined);
                    // }, 5000)
                }
                else {
                    setResult(res);
                }
            }).catch(error => {
                console.log(error);
            })
    }
    // const result: any = calculate();

    async function postData(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    return (
        <div className="App">
            <AppBar position="static" style={{background: "#78866B", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Toolbar variant="dense">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Typography variant="h6" color="inherit" component="div">
                        COURSE WORK
                    </Typography>
                </Toolbar>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginRight: "24px"}}>

                    <Button variant="contained" sx={{height: "38px", backgroundColor: "#1B2711", marginTop: "12px"}}
                            onClick={calculate}>Calculate</Button>
                    <Button variant="contained" sx={{height: "38px", backgroundColor: "#1B2711", marginLeft: "20px", marginTop: "12px"}}
                            onClick={setDefaultValues}>Generate</Button>
                    <Button variant="contained" sx={{height: "38px", backgroundColor: "#1B2711", marginLeft: "20px", marginTop: "12px"}}
                            onClick={handleOpen}>Set restrictions</Button>
                    <Button variant="contained" sx={{height: "38px", backgroundColor: "#1B2711", marginLeft: "20px", marginTop: "12px"}}
                            onClick={handleOpenFormulas} disabled={disabledButton}>Show formulas</Button>
                </div>
            </AppBar>
            {
                <Snackbar open={openBar} autoHideDuration={6000} onClose={handleCloseBar} anchorOrigin={{horizontal: "center", vertical: "top"}}>
                    <Alert onClose={handleCloseBar} severity="error">{message}</Alert>
                </Snackbar>
            }
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "10px"}}>
                {/*<div style={{*/}
                {/*    // width: "40%",*/}
                {/*    padding: "10px",*/}
                {/*    display: "flex",*/}
                {/*    flexDirection: "column",*/}
                {/*    justifyContent: "center"*/}
                {/*}}>*/}
                {
                    <div>
                        <Box sx={{
                            flexGrow: 1,
                            width: 330,
                            bgcolor: 'background.paper',
                            boxShadow: 5,
                            borderRadius: 2,
                            marginBottom: 3,
                            p: 1,
                        }}>
                            <text style={{fontSize: "20px", color: "#666666"}}>Input patient`s parameters</text>
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                            width: 300,
                            height: 370,
                            bgcolor: 'background.paper',
                            boxShadow: 5,
                            borderRadius: 2,
                            p: 3,
                        }}>
                            <Grid container spacing={1}>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="age"
                                        type="number"
                                        name="age"
                                        label="Age"
                                        fullWidth
                                        autoComplete="age"
                                        variant="standard"
                                        value={patient.age}
                                        onChange={(event) => onChangePatient('age', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"P1: Вік у місяцях"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="weight"
                                        name="weight"
                                        type="number"
                                        label="Weight"
                                        fullWidth
                                        autoComplete="weigh"
                                        variant="standard"
                                        value={patient.weigh}
                                        onChange={(event) => onChangePatient('weigh', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"P2: Вага"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="bsa"
                                        name="bsa"
                                        type="number"
                                        label="BSA"
                                        fullWidth
                                        autoComplete="BSA"
                                        variant="standard"
                                        value={patient.bsa}
                                        onChange={(event) => onChangePatient('bsa', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"P3: Площа поверхні тіла"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="dpPA"
                                        type="number"
                                        name="dpPA"
                                        label="dpPA"
                                        fullWidth
                                        autoComplete="dpPA"
                                        variant="standard"
                                        value={patient.dpPA}
                                        onChange={(event) => onChangePatient('dpPA', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"P4: Градієнт тиску на ЛА"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="pvr"
                                        name="pvr"
                                        type="number"
                                        label="PVR"
                                        fullWidth
                                        autoComplete="PVR"
                                        variant="standard"
                                        value={patient.PVR}
                                        onChange={(event) => onChangePatient('PVR', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"P5: Опір легеневих судин"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="ao-nadir"
                                        type="number"
                                        name="ao-nadir"
                                        label="AO-nadir"
                                        fullWidth
                                        variant="standard"
                                        value={patient.AOnadir}
                                        onChange={(event) => onChangePatient('AOnadir', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"P6: Розмір кореня аортального клапану"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="pPA"
                                        name="pPa"
                                        label="pPa"
                                        type="number"
                                        fullWidth
                                        // autoComplete="shipping postal-code"
                                        variant="standard"
                                        value={patient.pPa}
                                        onChange={(event) => onChangePatient('pPa', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"P7: Тиск в легеневій артерії"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="sato"
                                        name="sato"
                                        label="SATO"
                                        type="number"
                                        fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={patient.SATO}
                                        onChange={(event) => onChangePatient('SATO', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"Qin: Сатурація крові"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="qp"
                                        name="qp"
                                        label="QP/QS"
                                        type="number"
                                        fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={patient.qpQS}
                                        onChange={(event) => onChangePatient('qpQS', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"S1: Співвідношення об'ємних кровотоків"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="nakata"
                                        name="nakata"
                                        label="NAKATA"
                                        type="number"
                                        fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={patient.NAKATA}
                                        onChange={(event) => onChangePatient('NAKATA', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"S2: Індекс Наката"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="vedp"
                                        name="vedp"
                                        label="VEDP"
                                        type="number"
                                        fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={patient.VEDP}
                                        onChange={(event) => onChangePatient('VEDP', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"S3: Кінцевий діастолічний тиск"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>),
                                            inputProps: {min: 0}
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10} sm={6}>
                                    <TextField
                                        required
                                        id="mvz"
                                        name="MVz-score"
                                        label="MVz-score"
                                        type="number"
                                        fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={patient.MVZscore}
                                        onChange={(event) => onChangePatient('MVZscore', event)}
                                        InputProps={{
                                            endAdornment: (
                                                <Tooltip describeChild title={"S4: Z-score мітрального клапана"}>
                                                    <IconButton>
                                                        <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                    </IconButton>
                                                </Tooltip>)
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={10}>
                                    {/*<FormControl>*/}
                                    {/*  <FormLabel id="demo-row-radio-buttons-group-label" style={{ padding: 2, marginLeft: 4}}>Gender</FormLabel>*/}
                                    <RadioGroup
                                        row
                                        value={patient?.sex?.toString() || undefined}
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={handleChange}>
                                        <FormControlLabel value='1' control={<Radio color="default"/>}
                                                          label="Male"
                                                          style={{padding: 1, marginRight: 78}}/>
                                        <FormControlLabel value='2' control={<Radio color="default"/>} label="Female"/>

                                    </RadioGroup>
                                    {/*</FormControl>*/}
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                }
                {/*</div>*/}
                {/*<div style={{*/}
                {/*    // width: "40%",*/}
                {/*    // padding: "10px",*/}
                {/*    display: "flex",*/}
                {/*    flexDirection: "column",*/}
                {/*    justifyContent: "center"*/}
                {/*}}>*/}
                    {
                        <div>
                            <Box sx={{
                                flexGrow: 1,
                                width: 370,
                                bgcolor: 'background.paper',
                                boxShadow: 5,
                                borderRadius: 2,
                                marginBottom: 3,
                                p: 1,
                            }}>
                                <text style={{fontSize: "20px", color: "#666666"}}>Restrictions</text>
                            </Box>
                            <Box sx={{
                                flexGrow: 1,
                                width: 340,
                                height: 450,
                                bgcolor: 'background.paper',
                                boxShadow: 5,
                                borderRadius: 2,
                                p: 3,
                            }}>
                                <Grid item xs={10}>
                                    <div className="boxWrapper">
                                        <Box sx={{width: 360}}>
                                            <div className="sliderWrapper">
                                                <Slider
                                                    value={s1}
                                                    onChange={setS1Value}
                                                    valueLabelDisplay="auto"
                                                    step={stepNumber?.step_s1 || 0.01}
                                                    min={(restrictNumber?.min_s1 || restrictNumber?.min_s1 === 0) ? restrictNumber?.min_s1 : 0.3}
                                                    max={(restrictNumber?.max_s1 || restrictNumber?.max_s1 === 0) ? restrictNumber?.max_s1 : 1.5}
                                                    marks={marksS1}
                                                    style={{color: '#78866B', width: 250}}
                                                />
                                            </div>
                                        </Box>
                                        <Box style={{display: "flex", flexDirection: "row", marginLeft: "12px", width: "60px", height: "24px", marginTop: "3px", fontFamily: "Georgia sans-serif"}}>
                                            S1
                                            <Tooltip describeChild title={"Співвідношення об'ємних кровотоків - обмеження за замовчуванням [0.9; 1.1]"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: "10px", width: "10px", marginBottom: "6px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={10}>
                                    <div className="boxWrapper">
                                        <Box sx={{width: 360}}>
                                            <div className="sliderWrapper">
                                                <Slider
                                                    value={s2}
                                                    onChange={setS2Value}
                                                    valueLabelDisplay="auto"
                                                    step={stepNumber?.step_s2 || 5}
                                                    min={(restrictNumber?.min_s2 || restrictNumber?.min_s2 === 0) ? restrictNumber?.min_s2 : 280}
                                                    max={(restrictNumber?.max_s2 || restrictNumber?.max_s2 === 0) ? restrictNumber?.max_s2 : 360}
                                                    marks={marksS2}
                                                    style={{color: '#78866B', width: 250}}
                                                />
                                            </div>
                                        </Box>
                                        <Box style={{display: "flex", flexDirection: "row", marginLeft: "12px", width: "60px", height: "24px", marginTop: "3px", fontFamily: "Georgia sans-serif"}}>
                                            S2
                                            <Tooltip describeChild title={"Індекс Наката - обмеження за замовчуванням [300; 360]"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: "10px", width: "10px", marginBottom: "6px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={10}>
                                    <div className="boxWrapper">
                                        <Box sx={{width: 360}}>
                                            <div className="sliderWrapper">
                                                <Slider
                                                    value={s3}
                                                    onChange={setS3Value}
                                                    valueLabelDisplay="auto"
                                                    step={stepNumber?.step_s3 || 0.05}
                                                    min={(restrictNumber?.min_s3 || restrictNumber?.min_s3 === 0) ? restrictNumber?.min_s3 : 4}
                                                    max={(restrictNumber?.max_s3 || restrictNumber?.max_s3 === 0) ? restrictNumber?.max_s3 : 20}
                                                    marks={marksS3}
                                                    style={{color: '#78866B', width: 250}}
                                                />
                                            </div>
                                        </Box>
                                        <Box style={{display: "flex", flexDirection: "row", marginLeft: "12px", width: "60px", height: "24px", marginTop: "3px", fontFamily: "Georgia sans-serif"}}>
                                            S3
                                            <Tooltip describeChild title={"Кінцевий діастолічний тиск - обмеження за замовчуванням [8; 12]"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: "10px", width: "10px", marginBottom: "6px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={10}>
                                    <div className="boxWrapper">
                                        <Box sx={{width: 360}}>
                                            <div className="sliderWrapper">
                                                <Slider
                                                    value={s4}
                                                    onChange={setS4Value}
                                                    valueLabelDisplay="auto"
                                                    step={stepNumber?.step_s4 || 0.05}
                                                    min={(restrictNumber?.min_s4 || restrictNumber?.min_s4 === 0) ? restrictNumber?.min_s4 : -1}
                                                    max={(restrictNumber?.max_s4 || restrictNumber?.max_s4 === 0) ? restrictNumber?.max_s4 : 1}
                                                    marks={marksS4}
                                                    style={{color: '#78866B', width: 250}}
                                                />
                                            </div>
                                        </Box>
                                        <Box style={{display: "flex", flexDirection: "row", marginLeft: "12px", width: "60px", height: "24px", marginTop: "3px", fontFamily: "Georgia sans-serif"}}>
                                            S4
                                            <Tooltip describeChild title={"Z-score мітрального клапана - обмеження за замовчуванням [-1; 1]"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: "10px", width: "10px", marginBottom: "6px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={10}>
                                    <div className="boxWrapper">
                                        <Box sx={{width: 360}}>
                                            <div className="sliderWrapper">
                                                <Slider
                                                    value={u1}
                                                    onChange={setU1Value}
                                                    valueLabelDisplay="auto"
                                                    step={stepNumber?.step_u1 || 0.1}
                                                    min={(restrictNumber?.min_u1 || restrictNumber?.min_u1 === 0) ? restrictNumber?.min_u1 : 0}
                                                    max={(restrictNumber?.max_u1 || restrictNumber?.max_u1 === 0) ? restrictNumber?.max_u1 : 2}
                                                    marks={marksU1}
                                                    style={{color: '#78866B', width: 250}}
                                                />
                                            </div>
                                        </Box>
                                        <Box style={{display: "flex", flexDirection: "row", marginLeft: "12px", width: "60px", height: "24px", marginTop: "3px", fontFamily: "Georgia sans-serif"}}>
                                            U1
                                            <Tooltip describeChild title={"Фуросемід - обмеження за замовчуванням [0.0; 1.3]"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: "10px", width: "10px", marginBottom: "6px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={10}>
                                    <div className="boxWrapper">
                                        <Box sx={{width: 360}}>
                                            <div className="sliderWrapper">
                                                <Slider
                                                    value={u2}
                                                    onChange={setU2Value}
                                                    valueLabelDisplay="auto"
                                                    step={stepNumber?.step_u2 || 0.01}
                                                    min={(restrictNumber?.min_u2 || restrictNumber?.min_u2 === 0) ? restrictNumber?.min_u2 : 0}
                                                    max={(restrictNumber?.max_u2 || restrictNumber?.max_u2 === 0) ? restrictNumber?.max_u2 : 0.2}
                                                    marks={marksU2}
                                                    style={{color: '#78866B', width: 250}}
                                                />
                                            </div>
                                        </Box>
                                        <Box style={{display: "flex", flexDirection: "row", marginLeft: "12px", width: "60px", height: "24px", marginTop: "3px", fontFamily: "Georgia sans-serif"}}>
                                            U2
                                            <Tooltip describeChild title={"Еналаприл - обмеження за замовчуванням [0.0; 0.1]"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: "10px", width: "10px", marginBottom: "6px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={10}>
                                    <div className="boxWrapper">
                                        <Box sx={{width: 360}}>
                                            <div className="sliderWrapper">
                                                <Slider
                                                    value={u3}
                                                    onChange={setU3Value}
                                                    valueLabelDisplay="auto"
                                                    step={stepNumber?.step_u3 || 0.01}
                                                    min={(restrictNumber?.min_u3 || restrictNumber?.min_u3 === 0) ? restrictNumber?.min_u3 : 0}
                                                    max={(restrictNumber?.max_u3 || restrictNumber?.max_u3 === 0) ? restrictNumber?.max_u3 : 1.2}
                                                    marks={marksU3}
                                                    style={{color: '#78866B', width: 250}}
                                                />
                                            </div>
                                        </Box>
                                        <Box style={{display: "flex", flexDirection: "row", marginLeft: "12px", width: "60px", height: "24px", marginTop: "3px", fontFamily: "Georgia sans-serif"}}>
                                            U3
                                            <Tooltip describeChild title={"Верошпирон - обмеження за замовчуванням [0.0; 1.08]"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: "10px", width: "10px", marginBottom: "6px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={10}>
                                    <div className="boxWrapper">
                                        <Box sx={{width: 360}}>
                                            <div className="sliderWrapper">
                                                <Slider
                                                    value={u4}
                                                    onChange={setU4Value}
                                                    valueLabelDisplay="auto"
                                                    step={stepNumber?.step_u4 || 0.05}
                                                    min={(restrictNumber?.min_u4 || restrictNumber?.min_u4 === 0) ? restrictNumber?.min_u4 : 0}
                                                    max={(restrictNumber?.max_u4 || restrictNumber?.max_u4 === 0) ? restrictNumber?.max_u4 : 1.6}
                                                    marks={marksU4}
                                                    style={{color: '#78866B', width: 250}}
                                                />
                                            </div>
                                        </Box>
                                        <Box style={{display: "flex", flexDirection: "row", marginLeft: "12px", width: "60px", height: "24px", marginTop: "3px", fontFamily: "Georgia sans-serif"}}>
                                            U4
                                            <Tooltip describeChild title={"Гідрохлортіазид - обмеження за замовчуванням [0.0; 1.2]"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: "10px", width: "10px", marginBottom: "6px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </div>
                                </Grid>
                            </Box>
                        </div>
                    }
                {/*</div>*/}
                {/*<div style={{*/}
                {/*    // width: "40%",*/}
                {/*    // padding: "10px",*/}
                {/*    display: "flex",*/}
                {/*    flexDirection: "column",*/}
                {/*    justifyContent: "center"*/}
                {/*}}>*/}
                    {
                        <div>
                            <Box sx={{
                                flexGrow: 1,
                                width: 330,
                                bgcolor: 'background.paper',
                                boxShadow: 5,
                                borderRadius: 2,
                                marginBottom: 3,
                                p: 1,
                            }}>
                                <text style={{fontSize: "20px", color: "#666666"}}>Result</text>
                            </Box>
                            <Box sx={{
                                flexGrow: 1,
                                width: 300,
                                height: 420,
                                bgcolor: 'background.paper',
                                boxShadow: 5,
                                borderRadius: 2,
                                p: 3,
                            }}>
                                <Box sx={{
                                    flexGrow: 1,
                                    width: "300px",
                                    height: "230px",
                                    boxShadow: 5,
                                    borderRadius: 2,
                                    marginBottom: "10px"
                                }}>
                                <Box sx={{
                                    flexGrow: 1,
                                    // width: 300,
                                    // height: 20,
                                    bgcolor: 'background.paper',
                                    // boxShadow: 3,
                                    borderRadius: 2,
                                    p: "8px",
                                    marginBottom: "10px"
                                }}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                    <Box sx={{width: "170px", height: "18px", flexGrow: 1,  fontSize: "20px", color: "#1B2711"}}>Q-out
                                        <Tooltip describeChild title={"Q: Рівень сатурації"}>
                                            <IconButton>
                                                <FontAwesomeIcon style={{height: 10, width: 10, marginBottom: "3px"}} icon={faInfo}/>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    <Box sx={{
                                        width: "100px",
                                        fontSize: "20px",
                                        color: "#666666",
                                        height: "20px",
                                        // borderRadius: 1,
                                        flexGrow: 1}} >
                                        {result?.result?.y1_value ? Math.round(result.result.y1_value * 100) / 100 : "None"}

                                    </Box>
                                    {/*<text>{result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</text>*/}
                                    </div>
                                </Box>
                                <Box sx={{
                                    flexGrow: 1,
                                    // width: 290,
                                    // height: 20,
                                    bgcolor: 'background.paper',
                                    // boxShadow: 3,
                                    // borderRadius: 2,
                                    marginBottom: "10px",
                                    p: "8px",
                                }}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Box sx={{width: "170px", height: "18px", flexGrow: 1,  fontSize: "20px", color: "#1B2711"}}>S1-out
                                            <Tooltip describeChild title={"S1: Співвідношення об'ємних кровотоків"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10, marginBottom: "3px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Box sx={{
                                            width: "100px",
                                            fontSize: "20px",
                                            color: "#666666",
                                            height: "10px",
                                            // borderRadius: 1,
                                            flexGrow: 1}}>
                                            {result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</Box>
                                        {/*<text>{result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</text>*/}
                                    </div>
                                </Box>
                                <Box sx={{
                                    flexGrow: 1,
                                    // width: 290,
                                    // height: 20,
                                    bgcolor: 'background.paper',
                                    // boxShadow: 3,
                                    borderRadius: 2,
                                    marginBottom: "10px",
                                    p: "8px",
                                }}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Box sx={{width: "170px", height: "18px", flexGrow: 1,  fontSize: "20px", color: "#1B2711"}}>S2-out
                                            <Tooltip describeChild title={"S2: Індекс Наката"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10, marginBottom: "3px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Box sx={{
                                            width: "100px",
                                            fontSize: "20px",
                                            color: "#666666",
                                            height: "20px",
                                            // borderRadius: 1,
                                            flexGrow: 1}}>
                                            {result?.result?.y3_value ? Math.round(result.result.y3_value * 100) / 100 : "None"}</Box>
                                        {/*<text>{result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</text>*/}
                                    </div>
                                </Box>
                                <Box sx={{
                                    flexGrow: 1,
                                    // width: 290,
                                    // height: 20,
                                    bgcolor: 'background.paper',
                                    // boxShadow: 3,
                                    marginBottom: "10px",
                                    borderRadius: 2,
                                    p: "8px",
                                }}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Box sx={{width: "170px", height: "18px", flexGrow: 1,  fontSize: "20px", color: "#1B2711"}}>S3-out
                                            <Tooltip describeChild title={"S3: Кінцевий діастолічний тиск"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10, marginBottom: "3px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Box sx={{
                                            width: "100px",
                                            fontSize: "20px",
                                            color: "#666666",
                                            height: "20px",
                                            // borderRadius: 1,
                                            flexGrow: 1}}>
                                            {result?.result?.y4_value ? Math.round(result.result.y4_value * 100) / 100 : "None"}</Box>
                                        {/*<text>{result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</text>*/}
                                    </div>
                                </Box>
                                <Box sx={{
                                    flexGrow: 1,
                                    // width: 290,
                                    // height: 20,
                                    bgcolor: 'background.paper',
                                    // boxShadow: 3,
                                    marginBottom: "10px",
                                    borderRadius: 2,
                                    p: "8px",
                                }}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Box sx={{width: "170px", height: "18px", flexGrow: 1,  fontSize: "20px", color: "#1B2711"}}>S4-out
                                            <Tooltip describeChild title={"S4: Z-score мітрального клапана"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10, marginBottom: "3px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Box sx={{
                                            width: "100px",
                                            fontSize: "20px",
                                            color: "#666666",
                                            height: "20px",
                                            // borderRadius: 1,
                                            flexGrow: 1}}>
                                            {result?.result?.y5_value ? Math.round(result.result.y5_value * 100) / 100 : "None"}</Box>
                                        {/*<text>{result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</text>*/}
                                    </div>
                                </Box>
                            </Box>
                                <Box sx={{flexGrow: 1,
                                    width: "300px",
                                    height: "180px",
                                    boxShadow: 5,
                                    borderRadius: 2,}}>
                                <Box sx={{
                                    flexGrow: 1,
                                    // width: 290,
                                    // height: 20,
                                    bgcolor: 'background.paper',
                                    // boxShadow: 3,
                                    marginBottom: "10px",
                                    borderRadius: 2,
                                    p: "8px",
                                }}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Box sx={{width: "170px", height: "18px", flexGrow: 1,  fontSize: "20px", color: "#1B2711"}}>U1-out
                                            <Tooltip describeChild title={"U1: Фуросемід (в грамах)"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10, marginBottom: "3px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Box sx={{
                                            width: "100px",
                                            fontSize: "20px",
                                            color: "#666666",
                                            height: "20px",
                                            // borderRadius: 1,
                                            flexGrow: 1}}>
                                            {result?.result?.u1_value ? Math.round(result.result.u1_value * 100) / 100 : "None"}</Box>
                                        {/*<text>{result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</text>*/}
                                    </div>
                                </Box>
                                <Box sx={{
                                    flexGrow: 1,
                                    // width: 290,
                                    // height: 20,
                                    bgcolor: 'background.paper',
                                    // boxShadow: 3,
                                    marginBottom: "10px",
                                    borderRadius: 2,
                                    p: "8px",
                                }}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Box sx={{width: "170px", height: "18px", flexGrow: 1,  fontSize: "20px", color: "#1B2711"}}>U2-out
                                            <Tooltip describeChild title={"U2: Еналаприл (в грамах)"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10, marginBottom: "3px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Box sx={{
                                            width: "100px",
                                            fontSize: "20px",
                                            color: "#666666",
                                            height: "20px",
                                            // borderRadius: 1,
                                            flexGrow: 1}}>
                                            {result?.result?.u2_value ? Math.round(result.result.u2_value * 100) / 100 : "None"}</Box>
                                        {/*<text>{result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</text>*/}
                                    </div>
                                </Box>
                                <Box sx={{
                                    flexGrow: 1,
                                    // width: 290,
                                    // height: 20,
                                    bgcolor: 'background.paper',
                                    // boxShadow: 3,
                                    marginBottom: "10px",
                                    borderRadius: 2,
                                    p: "8px",
                                }}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Box sx={{width: "170px", height: "18px", flexGrow: 1,  fontSize: "20px", color: "#1B2711"}}>U3-out
                                            <Tooltip describeChild title={"U3: Верошпирон (в грамах)"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10, marginBottom: "3px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Box sx={{
                                            width: "100px",
                                            fontSize: "20px",
                                            color: "#666666",
                                            height: "20px",
                                            // borderRadius: 1,
                                            flexGrow: 1}}>
                                            {result?.result?.u3_value ? Math.round(result.result.u3_value * 100) / 100 : "None"}</Box>
                                        {/*<text>{result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</text>*/}
                                    </div>
                                </Box>
                                <Box sx={{
                                    flexGrow: 1,
                                    // width: 290,
                                    // height: 20,
                                    bgcolor: 'background.paper',
                                    // boxShadow: 3,
                                    marginBottom: "10px",
                                    borderRadius: 2,
                                    p: "8px",
                                }}>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Box sx={{width: "170px", height: "18px", flexGrow: 1,  fontSize: "20px", color: "#1B2711"}}>U4-out
                                            <Tooltip describeChild title={"U4: Гідрохлортіазид (в грамах)"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10, marginBottom: "3px"}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Box sx={{
                                            width: "100px",
                                            fontSize: "20px",
                                            color: "#666666",
                                            height: "20px",
                                            // borderRadius: 1,
                                            flexGrow: 1}}>
                                            {result?.result?.u4_value ? Math.round(result.result.u4_value * 100) / 100 : "None"}</Box>
                                        {/*<text>{result?.result?.y2_value ? Math.round(result.result.y2_value * 100) / 100 : "None"}</text>*/}
                                    </div>
                                </Box>
                                </Box>
                            </Box>
                        </div>
                    }
                {
                // <div style={{
                //     width: "400px",
                //     display: "flex",
                //     justifyContent: "center"
                // }}>
                    <Modal open={open}>
                        <Box sx={{
                            position: 'absolute' as 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 330,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: "20px",
                        }}>
                            <Grid container spacing={1} >
                                <Grid item xs={10} md={4} >
                                    <TextField
                                        id="min_s1"
                                        type="number"
                                        name="min_s1"
                                        label="min-S1"
                                        // fullWidth
                                        // autoComplete="age"
                                        variant="standard"
                                        style={{width: "80px"}}
                                        value={restrictNumber.min_s1}
                                        onChange={(event) => setRestrictValue('min_s1', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         // <Tooltip describeChild title={"P1: Вік у місяцях"}>
                                        //         //     <IconButton>
                                        //         //         <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //         //     </IconButton>
                                        //         // </Tooltip>),
                                        //     inputProps: {min: 0}
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={10} md={4}>
                                    <TextField
                                        id="max-S1"
                                        name="max-S1"
                                        type="number"
                                        label="max-S1"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={restrictNumber.max_s1}
                                        onChange={(event) => setRestrictValue('max_s1', event)}
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <TextField
                                        id="step_s1"
                                        name="step_s1"
                                        type="number"
                                        label="step-S1"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={stepNumber.step_s1}
                                        onChange={(event) => setStepValue('step_s1', event)}
                                    />
                                </Grid>
                                <Grid item xs={10} md={4}>
                                    <TextField
                                        id="min_s2"
                                        name="min_s2"
                                        type="number"
                                        label="min-S2"
                                        // fullWidth
                                        // autoComplete="BSA"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={restrictNumber.min_s2}
                                        onChange={(event) => setRestrictValue('min_s2', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"P3: Площа поверхні тіла"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>),
                                        //     inputProps: {min: 0}
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={10} md={4}>
                                    <TextField
                                        id="max-S2"
                                        type="number"
                                        name="max-S2"
                                        label="max-S2"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="dpPA"
                                        variant="standard"
                                        value={restrictNumber.max_s2}
                                        onChange={(event) => setRestrictValue('max_s2', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"P4: Градієнт тиску на ЛА"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>),
                                        //     inputProps: {min: 0}
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <TextField
                                        id="step_s2"
                                        name="step_s2"
                                        type="number"
                                        label="step-S2"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={stepNumber.step_s2}
                                        onChange={(event) => setStepValue('step_s2', event)}
                                    />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="min_s3"
                                        name="min_s3"
                                        type="number"
                                        label="min-S3"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="PVR"
                                        variant="standard"
                                        value={restrictNumber.min_s3}
                                        onChange={(event) => setRestrictValue('min_s3', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"P5: Опір легеневих судин"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>),
                                        //     inputProps: {min: 0}
                                        // }}
                                    />
                                </Grid>

                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="max_s3"
                                        type="number"
                                        name="max_s3"
                                        label="max-S3"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        variant="standard"
                                        value={restrictNumber.max_s3}
                                        onChange={(event) => setRestrictValue('max_s3', event)}

                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <TextField
                                        id="step_s3"
                                        name="step_s3"
                                        type="number"
                                        label="step-S3"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={stepNumber.step_s3}
                                        onChange={(event) => setStepValue('step_s3', event)}
                                    />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="min_s4"
                                        name="min_s4"
                                        label="min-S4"
                                        type="number"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="shipping postal-code"
                                        variant="standard"
                                        value={restrictNumber.min_s4}
                                        onChange={(event) => setRestrictValue('min_s4', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"P7: Тиск в легеневій артерії"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>),
                                        //     inputProps: {min: 0}
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="max_s4"
                                        name="max_s4"
                                        label="max-S4"
                                        type="number"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={restrictNumber.max_s4}
                                        onChange={(event) => setRestrictValue('max_s4', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"Qin: Сатурація крові"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>),
                                        //     inputProps: {min: 0}
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <TextField
                                        id="step_s4"
                                        name="step_s4"
                                        type="number"
                                        label="step-S4"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={stepNumber.step_s4}
                                        onChange={(event) => setStepValue('step_s4', event)}
                                    />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="min_u1"
                                        name="min_u1"
                                        label="min-U1"
                                        type="number"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={restrictNumber.min_u1}
                                        onChange={(event) => setRestrictValue('min_u1', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"S1: Співвідношення об'ємних кровотоків"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>),
                                        //     inputProps: {min: 0}
                                        // }}
                                    />
                                </Grid>

                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="max_u1"
                                        name="max_u1"
                                        label="max-U1"
                                        type="number"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={restrictNumber.max_u1}
                                        onChange={(event) => setRestrictValue('max_u1', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"S2: Індекс Наката"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>),
                                        //     inputProps: {min: 0}
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <TextField
                                        id="step_u1"
                                        name="step_u1"
                                        type="number"
                                        label="step-U1"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={stepNumber.step_u1}
                                        onChange={(event) => setStepValue('step_u1', event)}
                                    />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="min_u2"
                                        name="min_u2"
                                        label="min-U2"
                                        type="number"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={restrictNumber.min_u2}
                                        onChange={(event) => setRestrictValue('min_u2', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"S3: Кінцевий діастолічний тиск"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>),
                                        //     inputProps: {min: 0}
                                        // }}
                                    />
                                </Grid>

                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="max_u2"
                                        name="max_u2"
                                        label="max-U2"
                                        type="number"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={restrictNumber.max_u2}
                                        onChange={(event) => setRestrictValue('max_u2', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"S4: Z-score мітрального клапана"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>)
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <TextField
                                        id="step_u2"
                                        name="step_u3"
                                        type="number"
                                        label="step-U2"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={stepNumber.step_u2}
                                        onChange={(event) => setStepValue('step_u2', event)}
                                    />
                                </Grid>

                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="min_u3"
                                        name="min_u3"
                                        label="min-U3"
                                        type="number"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={restrictNumber.min_u3}
                                        onChange={(event) => setRestrictValue('min_u3', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"S4: Z-score мітрального клапана"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>)
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="max_u3"
                                        name="max_u3"
                                        label="max-U3"
                                        type="number"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={restrictNumber.max_u3}
                                        onChange={(event) => setRestrictValue('max_u3', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"S4: Z-score мітрального клапана"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>)
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <TextField
                                        id="step_u3"
                                        name="step_u3"
                                        type="number"
                                        label="step-U3"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={stepNumber.step_u3}
                                        onChange={(event) => setStepValue('step_u3', event)}
                                    />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="min_u4"
                                        name="min_u4"
                                        label="min-U4"
                                        style={{width: "80px"}}
                                        type="number"
                                        // fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={restrictNumber.min_u4}
                                        onChange={(event) => setRestrictValue('min_u4', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"S4: Z-score мітрального клапана"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>)
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <TextField
                                        id="max_u4"
                                        name="max_u4"
                                        label="max-U4"
                                        type="number"
                                        style={{width: "80px"}}
                                        // fullWidth
                                        // autoComplete="shipping country"
                                        variant="standard"
                                        value={restrictNumber.max_u4}
                                        onChange={(event) => setRestrictValue('max_u4', event)}
                                        // InputProps={{
                                        //     endAdornment: (
                                        //         <Tooltip describeChild title={"S4: Z-score мітрального клапана"}>
                                        //             <IconButton>
                                        //                 <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                        //             </IconButton>
                                        //         </Tooltip>)
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <TextField
                                        id="step_u4"
                                        name="step_u4"
                                        type="number"
                                        label="step-U4"
                                        style={{width: "80px"}}
                                        variant="standard"
                                        value={stepNumber.step_u4}
                                        onChange={(event) => setStepValue('step_u4', event)}
                                    />
                                </Grid>
                            </Grid>
                            <Button onClick={handleClose} variant="contained" sx={{height: "38px", backgroundColor: "#1B2711", marginLeft: "236px", marginTop: "12px"}}>Save</Button>
                        </Box>
                    </Modal>
                // </div>
                }
                {
                    <Modal open={openFormulas}>
                        <Box sx={{
                            position: 'absolute' as 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 510,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            borderRadius: 2,
                            boxShadow: 24,
                            p: "20px",
                        }}>
                            <Box sx={{
                                flexGrow: 1,
                                width: 490,
                                height: 20,
                                bgcolor: 'background.paper',
                                boxShadow: 3,
                                borderRadius: 2,
                                p: "8px",
                                marginBottom: "10px"
                            }}>
                                <text style={{fontSize: "14px", color: "#666666"}}>{inline_mod1}</text>
                            </Box>
                            <Box sx={{
                                flexGrow: 1,
                                width: 490,
                                height: 20,
                                bgcolor: 'background.paper',
                                boxShadow: 3,
                                borderRadius: 2,
                                p: "8px",
                                marginBottom: "10px"
                            }}>
                                <text style={{fontSize: "14px", color: "#666666"}}>{inline_mod2}</text>
                            </Box>
                            <Box sx={{
                                flexGrow: 1,
                                width: 490,
                                height: 20,
                                bgcolor: 'background.paper',
                                boxShadow: 3,
                                borderRadius: 2,
                                p: "8px",
                                marginBottom: "10px"
                            }}>
                                <text style={{fontSize: "14px", color: "#666666"}}>{inline_mod3}</text>
                            </Box>
                            <Box sx={{
                                flexGrow: 1,
                                width: 490,
                                height: 20,
                                bgcolor: 'background.paper',
                                boxShadow: 3,
                                borderRadius: 2,
                                p: "8px",
                                marginBottom: "10px"
                            }}>
                                <text style={{fontSize: "14px", color: "#666666"}}>{inline_mod4}</text>
                            </Box>
                            <Box sx={{
                                flexGrow: 1,
                                width: 490,
                                height: 20,
                                bgcolor: 'background.paper',
                                boxShadow: 3,
                                borderRadius: 2,
                                p: "8px",
                                marginBottom: "10px"
                            }}>
                                <text style={{fontSize: "14px", color: "#666666"}}>{inline_mod5}</text>
                            </Box>
                            <Button onClick={handleCloseFormulas} variant="contained" sx={{height: "38px", backgroundColor: "#1B2711", marginLeft: "440px", marginTop: "12px"}}>OK</Button>
                        </Box>

                    </Modal>
                }
                {/*</div>*/}
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px"}}>
                <Box sx={{
                    flexGrow: 1,
                    width: "100%",
                    // height: 100,
                    bgcolor: 'background.paper',
                    boxShadow: 5,
                    borderRadius: 2,
                    overflowX: "auto",
                    overflowY: "hidden"
                }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={'labelModel'}>Models</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{overflow: 'auto', width: "calc(100% - 40px)"}}>
                    <div style={{
                        display: "flex",
                        padding: "0 18px",
                        height: "100px",
                        justifyContent: "space-between",
                        flexDirection: "column"
                    }}>
                        {
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>
                                <Box sx={{
                                    borderRadius: 2,
                                    flexGrow: 1,
                                    boxShadow: 5,
                                    justifyItems: "right",
                                    height: "60px"
                                }}>
                                    <div style={{
                                        // maxWidth: "100vw",
                                        padding: "10px",
                                        overflowX: "auto",
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>
                                        <Box sx={{width: "120px", marginTop: "10px"}}>
                                            <text className={'labelModel'}>Q-out</text>
                                        </Box>
                                        {/*justifyContent: "space-between"}}>*/}
                                        <TextField
                                            id="u4_P5_P4"
                                            label="u4 * P5/P4"
                                            name="u4_P5_P4"
                                            placeholder="-40.179"
                                            type="number"
                                            // multiline
                                            InputLabelProps={{shrink: true}}
                                            value={coefficient?.u4_P5_P4 || ''}
                                            onChange={(event) => onChangeCoefficient('u4_P5_P4', event)}
                                            size={"small"}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * P8/P4"
                                            label="u1 * P8/P4"
                                            placeholder="24.648"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_P8_P1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_P8_P1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="sin (P6)"
                                            label="sin(P6)"
                                            placeholder="0.624"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.sin_P6}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('sin_P6', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * tan(S2)"
                                            label="u1 * tan(S2)"
                                            placeholder="0.052"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_tan_S2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_tan_S2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * P3 * S4"
                                            label="u3 * P3 * S4"
                                            placeholder="-0.798"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_P3_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_P3_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="1 / cos(Q)"
                                            label="1 / cos(Q)"
                                            placeholder="-0.047"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.cos_Q}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('cos_Q', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="1 / P4 * P8"
                                            label="u2 * 1 /(P4 * P8)"
                                            placeholder="452.972"
                                            // multiline
                                            type="number"
                                            value={coefficient.u2_1P4_P8}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_1P4_P8', event)}
                                            size={"small"}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * cos (P6)"
                                            label="u3 * cos(P6)"
                                            placeholder="1.654"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_cos_P6}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_cos_P6', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * 1 / cos (S4)"
                                            label="u1 * 1/cos(S4)"
                                            placeholder="0.024"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_cos_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_cos_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * cos (P2)"
                                            label="u1 * cos(P2)"
                                            placeholder="0.713"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_cos_P2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_cos_P2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P4 * P5"
                                            label="P4 * P5"
                                            placeholder="-0.004"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P4_P5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P4_P5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * tan(S1)"
                                            label="u1 * tan(S1)"
                                            placeholder="-0.22"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_tan_S1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_tan_S1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * S3 * S4"
                                            label="u3 * S3 * S4"
                                            placeholder="0.068"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_S3_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_S3_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * 1 / sin(P6)"
                                            label="u2 * 1/sin(P6)"
                                            placeholder="-0.257"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_sin_P6}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_sin_P6', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="S4 ^ 2"
                                            label="S4 ^ 2"
                                            placeholder="-0.039"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.S4_sqrt}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('S4_sqrt', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="S4/S2"
                                            label="S4/S2"
                                            placeholder="-55.295"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.S4_S2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('S4_S2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * P6 * S1"
                                            label="u3 * P6 * S1"
                                            placeholder="-0.149"
                                            type="number"
                                            // multiline
                                            size={"small"}
                                            value={coefficient.u3_P6_S1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_P6_S1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * S1/P7"
                                            label="u3 * S1/P7"
                                            placeholder="29.079"
                                            multiline
                                            size={"small"}
                                            value={coefficient.u3_S1_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_S1_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * 1 / sin(P1)"
                                            label="u3 * 1/sin(P1)"
                                            placeholder="0.178"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_sin_P1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_sin_P1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * S4 / P8"
                                            label="u4 * S4/P8"
                                            placeholder="0.197"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_S4_P8}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_S4_P8', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="const"
                                            label="const"
                                            placeholder="95.371"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.const_1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('const_1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                    </div>
                                </Box>

                            </div>
                        }
                    </div>
                    <div style={{
                        display: "flex",
                        padding: "0 18px",
                        height: "100px",
                        justifyContent: "space-between",
                        flexDirection: "column"
                    }}>
                        {
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>
                                <Box sx={{
                                    borderRadius: 2,
                                    flexGrow: 1,
                                    boxShadow: 5,
                                    justifyItems: "right",
                                    height: "60px"
                                }}>
                                    <div style={{
                                        // maxWidth: "100vw",
                                        padding: "10px",
                                        overflowX: "auto",
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>
                                        {/*justifyContent: "space-between"}}>*/}
                                        <Box sx={{width: "120px", marginTop: "10px"}}>
                                            <text className={'labelModel'}>S1-out</text>
                                        </Box>
                                        <TextField
                                            id="u3 * P3 * S3"
                                            label="u3 * P3 * S3"
                                            placeholder="0.016"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_P3_S3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_P3_S3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * 1/P7^2"
                                            label="u4 * 1/P7^2"
                                            placeholder="10.513"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_P7_sqrt}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_P7_sqrt', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * P3/Q"
                                            label="u2 * P3/Q"
                                            placeholder="321.945"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_P3_Q}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_P3_Q', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * S1 * P8"
                                            label="u1 * S1 * P8"
                                            placeholder="0.078"
                                            type="number"
                                            // multiline
                                            size={"small"}
                                            value={coefficient.u1_S1_P8}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_S1_P8', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="1/sin(P5)"
                                            label="1/sin(P5)"
                                            placeholder="0.009"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.sin_P5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('sin_P5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="sin(S1)"
                                            label="sin(S1)"
                                            placeholder="-0.35"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.sin_S1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('sin_S1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="tan(P6)"
                                            label="tan(P6)"
                                            placeholder="-0.006"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.tan_P6}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('tan_P6', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * 1/(P2 * S1)"
                                            label="u1 * 1/(P2 * S1)"
                                            placeholder="−2.213"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_P2_S1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_P2_S1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * 1/sin(P6)"
                                            label="u4 * 1/sin(P6)"
                                            placeholder="0.006"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_sin_P6}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_sin_P6', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * P1/P5"
                                            label="u4 * P1/P5"
                                            placeholder="-0.002"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_P1_P5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_P1_P5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * S3/P5"
                                            label="u4 * S3/P5"
                                            placeholder="0.022"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_S3_P5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_S3_P5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P8/P6"
                                            label="P8/P6"
                                            placeholder="-1.803"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P8_P6}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P8_P6', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * 1/ (S2 * S4)"
                                            label="u3 * 1/ (S2 * S4)"
                                            placeholder="-3.819"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_S2_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_S2_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="1/cos(S3"
                                            label="1/cos(S3)"
                                            placeholder="-0.001"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.cos_S3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('cos_S3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P6 * S3"
                                            label="P6 * S3"
                                            placeholder="-0.001"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P6_S3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P6_S3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * P2/P6"
                                            label="u2 * P2/P6"
                                            placeholder="-1.871"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_P2_P6}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_P2_P6', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="S1 * S3"
                                            label="S1 * S3"
                                            placeholder="0.006"
                                            // multiline
                                            type="number"
                                            size = {"small"}
                                            value={coefficient.S1_S3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('S1_S3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="cos(P4)"
                                            label="cos(P4)"
                                            placeholder="-0.027"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.cos_P4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('cos_P4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * P8/P7"
                                            label="u1 * P8/P7"
                                            placeholder="0.951"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_P8_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_P8_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P5/S1"
                                            label="P5/S1"
                                            placeholder="0.012"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P5_S1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P5_S1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="const"
                                            label="const"
                                            placeholder="1.112"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.const_2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('const_2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                    </div>
                                </Box>

                            </div>
                        }
                    </div>
                    <div style={{
                        display: "flex",
                        padding: "0 18px",
                        height: "100px",
                        justifyContent: "space-between",
                        flexDirection: "column"
                    }}>
                        {
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>


                                <Box sx={{
                                    borderRadius: 2,
                                    flexGrow: 1,
                                    boxShadow: 5,
                                    justifyItems: "right",
                                    height: "60px"
                                }}>

                                    <div style={{
                                        // maxWidth: "100vw",
                                        padding: "10px",
                                        overflowX: "auto",
                                        display: "flex",
                                        flexDirection: "row",
                                    }}>
                                        {/*justifyContent: "space-between"}}>*/}
                                        <Box sx={{width: "120px", marginTop: "10px"}}>
                                            <text className={'labelModel'}>S2-out</text>
                                        </Box>
                                        <TextField
                                            id="P2/P7"
                                            label="P2/P7"
                                            placeholder="40.985"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P2_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P2_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * P3 * P8"
                                            label="u4 * P3 * P8"
                                            placeholder="-78.312"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_P3_P8}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_P3_P8', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * P5/P7"
                                            label="u2 * P5/P7"
                                            placeholder="13571.156"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_P5_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_P5_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * 1/cos(S2)"
                                            label="u2 * 1/cos(S2)"
                                            placeholder="−133.817"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_cos_S2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_cos_S2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P1/P6"
                                            label="P1/P6"
                                            placeholder="21.045"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P1_P6}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P1_P6', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * S4/S2"
                                            label="u1 * S4/S2"
                                            placeholder="−4518.283"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_S4_S2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_S4_S2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * sin(P7)"
                                            label="u3 * sin(P7)"
                                            placeholder="−84.619"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_sin_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_sin_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * sin(P2)"
                                            label="u1 * sin(P2)"
                                            placeholder="54.093"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_sin_P2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_sin_P2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P5 * S4"
                                            label="P5 * S4"
                                            placeholder="4.696"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P5_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P5_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * S4/P5"
                                            label="u4 * S4/P5"
                                            placeholder="−14.869"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_S4_P5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_S4_P5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * tan(P4)"
                                            label="u3 * tan(P4)"
                                            placeholder="13.227"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_tan_P4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_tan_P4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="sin(Q)"
                                            label="sin(Q)"
                                            placeholder="−37.604"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.sin_Q}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('sin_Q', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * P5/S4"
                                            label="u1 * P5/S4"
                                            placeholder="−7.678"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_P5_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_P5_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="1/sin(P7)"
                                            label="1/sin(P7)"
                                            placeholder="-1.6"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.sin_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('sin_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * cos(S4)"
                                            label="u1 * cos(S4)"
                                            placeholder="57.676"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_cos_S4_mod3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_cos_S4_mod3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P5/S2"
                                            label="P5/S2"
                                            placeholder="10214.841"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P5_S2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P5_S2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * tan(P3)"
                                            label="u3 * tan(P3)"
                                            placeholder="−0.327"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_tan_P3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_tan_P3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * P4/P8"
                                            label="u2 * P4/P8"
                                            placeholder="−11.292"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_P4_P8}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_P4_P8', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * P5 * S1"
                                            label="u4 * P5 * S1"
                                            placeholder="−38.172"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_P5_S1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_P5_S1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P5/S1"
                                            label="u1 * P1/S2"
                                            placeholder="−56.887"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_P1_S2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_P1_S2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="const"
                                            label="const"
                                            placeholder="75.2"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.const_3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('const_3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                    </div>
                                </Box>
                            </div>
                        }
                    </div>
                    <div style={{
                        display: "flex",
                        padding: "0 18px",
                        height: "100px",
                        justifyContent: "space-between",
                        flexDirection: "column"
                    }}>
                        {
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>
                                <Box sx={{
                                    borderRadius: 2,
                                    flexGrow: 1,
                                    boxShadow: 5,
                                    justifyItems: "right",
                                    height: "60px"
                                }}>
                                    <div style={{
                                        // maxWidth: "100vw",
                                        padding: "10px",
                                        overflowX: "auto",
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>
                                        <Box sx={{width: "120px", marginTop: "10px"}}>
                                            <text className={'labelModel'}>S3-out</text>
                                        </Box>
                                        {/*justifyContent: "space-between"}}>*/}
                                        {/*<text className={'labelModel'}>S3-out</text>*/}
                                        <TextField
                                            id="u1 * P7/S3"
                                            label="u1 * P7/S3"
                                            placeholder="−0.022"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_P7_S3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_P7_S3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * 1/(P7 * P8)"
                                            label="u2 * 1/(P7 * P8)"
                                            placeholder="−1703.357"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_P7_P8}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_P7_P8', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * P5 * S1"
                                            label="u4 * P5 * S1"
                                            placeholder="−0.935"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_P5_S1_mod4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_P5_S1_mod4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P2/P4"
                                            label="P2/P4"
                                            placeholder="10.486"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P2_P4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P2_P4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * 1/S4^2"
                                            label="u3 * 1/S4^2"
                                            placeholder="0.037"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_S4_sqrt}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_S4_sqrt', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="1/(P7 * S4)"
                                            label="1/(P7 * S4)"
                                            placeholder="−5.294"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P7_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P7_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * 1/(P2 * S3)"
                                            label="u2 * 1/(P2 * S3)"
                                            placeholder="16956.611"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_P2_S3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_P2_S3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P4/P8"
                                            label="P4/P8"
                                            placeholder="0.051"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P4_P8}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P4_P8', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * cos(P7)"
                                            label="u1 * cos(P7)"
                                            placeholder="1.619"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_cos_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_cos_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="tan(S1)"
                                            label="tan(S1)"
                                            placeholder="0.204"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.tan_S1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('tan_S1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * 1/sin(S4)"
                                            label="u1 * 1/sin(S4)"
                                            placeholder="0.304"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_sin_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_sin_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="S4 ^ 2"
                                            label="S4 ^ 2"
                                            placeholder="0.055"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.S4_sqrt_mod4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('S4_sqrt_mod4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * 1/sin(P6)"
                                            label="u4 * 1/sin(P6)"
                                            placeholder="−0.151"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_sin_P6_mod4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_sin_P6_mod4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * 1/sin(P6)"
                                            label="u2 * 1/sin(P6)"
                                            placeholder="0.672"
                                            type="number"
                                            // multiline
                                            size={"small"}
                                            value={coefficient.u2_sin_P6_mod4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_sin_P6_mod4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P5 * S2"
                                            label="P5 * S2"
                                            placeholder="−0.002"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P5_S2_mod4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P5_S2_mod4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * cos(P7)"
                                            label="u4 * cos(P7)"
                                            placeholder="1.834"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_cos_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_cos_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * P6/S3"
                                            label="u1 * P6/S3"
                                            placeholder="−0.962"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_P6_S3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_P6_S3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * 1/sin(S4)"
                                            label="u4 * 1/sin(S4)"
                                            placeholder="0.153"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_sin_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_sin_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="const"
                                            label="const"
                                            placeholder="12.88"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.const_4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('const_4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                    </div>
                                </Box>

                            </div>
                        }
                    </div>
                    <div style={{
                        display: "flex",
                        padding: "0 18px",
                        height: "100px",
                        justifyContent: "space-between",
                        flexDirection: "column"
                    }}>
                        {
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>
                                <Box sx={{
                                    borderRadius: 2,
                                    flexGrow: 1,
                                    boxShadow: 5,
                                    justifyItems: "right",
                                    height: "60px"
                                }}>
                                    <div style={{
                                        // maxWidth: "100vw",
                                        padding: "10px",
                                        overflowX: "auto",
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>
                                        {/*justifyContent: "space-between"}}>*/}
                                        <Box sx={{width: "120px", marginTop: "10px"}}>
                                            <text className={'labelModel'}>S4-out</text>
                                        </Box>
                                        <TextField
                                            id="1/(P1 * P5)"
                                            label="1/(P1 * P5)"
                                            placeholder="−112.729"
                                            type="number"
                                            // multiline
                                            size={"small"}
                                            value={coefficient.P1_P5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P1_P5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * S3/P7"
                                            label="u2 * S3/P7"
                                            placeholder="34.935"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_S3_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_S3_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * P3 * P5"
                                            label="u4 * P3 * P5"
                                            placeholder="0.598"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_P3_P5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_P3_P5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * 1/sin(P7)"
                                            label="u3 * 1/sin(P7)"
                                            placeholder="0.174"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_sin_P7_mod5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_sin_P7_mod5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="P5/P7"
                                            label="P5/P7"
                                            placeholder="9.531"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.P5_P7}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('P5_P7', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="1/(P7 * S4)"
                                            label="u2 * 1/sin(S4)"
                                            placeholder="−2.286"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_sin_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_sin_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * cos(P1)"
                                            label="u2 * cos(P1)"
                                            placeholder="21.918"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_cos_P1}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_cos_P1', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * 1/sin(P2)"
                                            label="u3 * 1/sin(P2)"
                                            placeholder="0.39"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_sin_P2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_sin_P2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * cos(S2)"
                                            label="u3 * cos(S2)"
                                            placeholder="2.511"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_cos_S2}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_cos_S2', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="sin(S1)"
                                            label="sin(S1)"
                                            placeholder="2.042"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.sin_S1_mod5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('sin_S1_mod5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * tan(S3)"
                                            label="u2 * tan(S3)"
                                            placeholder="−0.227"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_tan_S3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_tan_S3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * sin(Q)"
                                            label="u2 * sin(Q)"
                                            placeholder="6.917"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_sin_Q}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_sin_Q', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * 1/sin(Q)"
                                            label="u3 * 1/sin(Q)"
                                            placeholder="−0.443"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_sin_Q}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_sin_Q', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * 1/sin(Q)"
                                            label="u1 * 1/sin(Q)"
                                            placeholder="0.162"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_sin_Q}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_sin_Q', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * P2 * S4"
                                            label="u3 * P2 * S4"
                                            placeholder="0.01"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_P2_S4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_P2_S4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u3 * sin(Q)"
                                            label="u3 * sin(Q)"
                                            placeholder="1.121"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u3_sin_Q_mod5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u3_sin_Q_mod5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u4 * tan(P4)"
                                            label="u4 * tan(P4)"
                                            placeholder="−0.203"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u4_tan_P4}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u4_tan_P4', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u1 * tan(Q)"
                                            label="u1 * tan(Q)"
                                            placeholder="−0.184"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u1_tan_Q}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u1_tan_Q', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * sin(S3)"
                                            label="u2 * sin(S3)"
                                            placeholder="11.249"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_sin_S3}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_sin_S3', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * tan(P6)"
                                            label="u2 * tan(P6)"
                                            placeholder="2.511"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_tan_P6}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_tan_P6', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="u2 * sin(S4)"
                                            label="u2 * sin(S4)"
                                            placeholder="10.376"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.u2_sin_S4_mod5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('u2_sin_S4_mod5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                        <TextField
                                            id="const"
                                            label="const"
                                            placeholder="−4.331"
                                            // multiline
                                            type="number"
                                            size={"small"}
                                            value={coefficient.const_5}
                                            InputLabelProps={{shrink: true}}
                                            onChange={(event) => onChangeCoefficient('const_5', event)}
                                            style={{width: "120px", minWidth: "120px", marginRight: 8}}
                                        />
                                    </div>
                                </Box>

                            </div>
                        }
                    </div>
                        </AccordionDetails>
                        </Accordion>
                </Box>
            </div>
        </div>
    )
}

export default App;
