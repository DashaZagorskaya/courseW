import React from 'react';
import logo from './logo.svg';
import './App.css';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuIcon from '@mui/icons-material/Menu';

import {
    AppBar,
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid, IconButton,
    Radio,
    RadioGroup, Slider, TextareaAutosize,
    TextField, Toolbar, Tooltip, Typography
} from "@mui/material";





function App() {
    const [s1, setS1] = React.useState<number[]>([0.9, 1.1]);
    const [s2, setS2] = React.useState<number[]>([300, 360]);
    const [s3, setS3] = React.useState<number[]>([8, 12]);
    const [s4, setS4] = React.useState<number[]>([-1, 1]);
    const [u1, setU1] = React.useState<number[]>([0, 1.3]);
    const [u2, setU2] = React.useState<number[]>([0, 0.1]);
    const [u3, setU3] = React.useState<number[]>([0, 1.08]);
    const [u4, setU4] = React.useState<number[]>([0, 1.2]);
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

    const marksS1 = [
        {value: 0.3, label: '0.3',},
        {value: 0.6, label: '0.6',},
        {value: 0.9, label: '0.9',},
        {value: 1.2, label: '1.2',},
        {value: 1.5, label: '1.5',},
    ];
    const marksS2 = [
        {value: 280, label: '280',},
        {value: 300, label: '300',},
        {value: 320, label: '320',},
        {value: 340, label: '340',},
        {value: 360, label: '360',},
    ];
    const marksS3 = [
        {value: 4, label: '4',},
        {value: 8, label: '8',},
        {value: 12, label: '12',},
        {value: 16, label: '16',},
        {value: 20, label: '20',},
    ];
    const marksS4 = [
        {value: -1, label: '-1.0',},
        {value: -0.5, label: '-0.5',},
        {value: 0, label: '0.0',},
        {value: 0.5, label: '0.5',},
        {value: 1, label: '1.0',},
    ];

    const marksU1 = [
        {value: 0, label: '0.0',},
        {value: 0.5, label: '0.5',},
        {value: 1, label: '1.0',},
        {value: 1.5, label: '1.5',},
        {value: 2, label: '2.0',},
    ];

    const marksU2 = [
        {value: 0, label: '0.0',},
        {value: 0.05, label: '0.05',},
        {value: 0.1, label: '0.1',},
        {value: 0.15, label: '0.15',},
        {value: 0.2, label: '0.2',},
    ];

    const marksU3 = [
        {value: 0, label: '0.0',},
        {value: 0.3, label: '0.3',},
        {value: 0.6, label: '0.6',},
        {value: 0.9, label: '0.9',},
        {value: 1.2, label: '1.2',},
    ];

    const marksU4 = [
        {value: 0, label: '0.0',},
        {value: 0.4, label: '0.4',},
        {value: 0.8, label: '0.8',},
        {value: 1.2, label: '1.2',},
        {value: 1.6, label: '1.6',},
    ];
    return (
    <div className="App">
        <AppBar position="static" style={{background: "#517DA3"}}>
            <Toolbar variant="dense" >
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h6" color="inherit" component="div">
                    COURSE WORK
                </Typography>
            </Toolbar>
        </AppBar>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <div style={{*/}
      {/*    fontSize: "30px",*/}
      {/*    color: "#666666",*/}
      {/*    marginLeft: "30px",*/}
      {/*    marginTop: "12px"*/}
      {/*  }}>Course work*/}
      {/*  </div>*/}
      {/*</header>*/}
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
                        p: 1,}}>
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
                                    name="age"
                                    label="Age"
                                    fullWidth
                                    autoComplete="age"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"P1: Вік"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="weight"
                                    name="weight"
                                    label="Weight"
                                    fullWidth
                                    autoComplete="weigh"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"P2: Вага"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="bsa"
                                    name="bsa"
                                    label="BSA"
                                    fullWidth
                                    autoComplete="BSA"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"P3: Площа поверхні тіла"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="dpPA"
                                    name="dpPA"
                                    label="dpPA"
                                    fullWidth
                                    autoComplete="dpPA"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"P4: Градієнт тиску на ЛА"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="pvr"
                                    name="pvr"
                                    label="PVR"
                                    fullWidth
                                    autoComplete="PVR"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"P5: Опір легеневих судин"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="ao-nadir"
                                    name="ao-nadir"
                                    label="AO-nadir"
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"P6: Розмір кореня аортального клапану"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="pPA"
                                    name="pPa"
                                    label="pPa"
                                    fullWidth
                                    // autoComplete="shipping postal-code"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"P7: Тиск в легеневій артерії"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="sato"
                                    name="sato"
                                    label="SATO"
                                    fullWidth
                                    // autoComplete="shipping country"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"Qin: Сатурація крові"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="qp"
                                    name="qp"
                                    label="QP/QS"
                                    fullWidth
                                    // autoComplete="shipping country"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"S1: Співвідношення об'ємних кровотоків"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="nakata"
                                    name="nakata"
                                    label="NAKATA"
                                    fullWidth
                                    // autoComplete="shipping country"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"S2: Індекс Наката"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="vedp"
                                    name="vedp"
                                    label="VEDP"
                                    fullWidth
                                    // autoComplete="shipping country"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <Tooltip describeChild title={"S3: Кінцевий діастолічний тиск"}>
                                                <IconButton>
                                                    <FontAwesomeIcon style={{height: 10, width: 10}} icon={faInfo}/>
                                                </IconButton>
                                            </Tooltip>)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    required
                                    id="mvz"
                                    name="MVz-score"
                                    label="MVz-score"
                                    fullWidth
                                    // autoComplete="shipping country"
                                    variant="standard"
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
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    style={{}}>
                                    <FormControlLabel value="female" control={<Radio color="default"/>} label="Female"
                                                      style={{padding: 1, marginRight: 73}}/>
                                    <FormControlLabel value="male" control={<Radio color="default"/>} label="Male"/>

                                </RadioGroup>
                                {/*</FormControl>*/}
                            </Grid>
                        </Grid>
                    </Box>
                    </div>
                }
    {/*</div>*/}
            <div style={{
                // width: "40%",
                // padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                {
                    <div>
                        <Box sx={{
                            flexGrow: 1,
                            width: 330,
                            bgcolor: 'background.paper',
                            boxShadow: 5,
                            borderRadius: 2,
                            marginBottom: 3,
                            p: 1,}}>
                            <text style={{fontSize: "20px", color: "#666666"}}>Restrictions</text>
                        </Box>
                    <Box sx={{
                        flexGrow: 1,
                        width: 300,
                        height: 450,
                        bgcolor: 'background.paper',
                        boxShadow: 5,
                        borderRadius: 2,
                        p: 3,
                    }}>
                        <Grid item xs={10}>
                            <div className="boxWrapper">
                                <Box sx={{ width: 360 }}>
                                    <div className="sliderWrapper">
                                        <Slider
                                            value={s1}
                                            onChange={setS1Value}
                                            valueLabelDisplay="auto"
                                            step={0.05}
                                            min={0.3}
                                            max={1.5}
                                            marks={marksS1}
                                            style={{color:'#60A5CA', width: 250}}
                                        />
                                    </div>
                                </Box>
                                <div className="labelWrapper">
                                    S1
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="boxWrapper">
                                <Box sx={{ width: 360 }}>
                                    <div className="sliderWrapper">
                                        <Slider
                                            value={s2}
                                            onChange={setS2Value}
                                            valueLabelDisplay="auto"
                                            step={5}
                                            min={280}
                                            max={360}
                                            marks={marksS2}
                                            style={{color:'#60A5CA', width: 250}}
                                        />
                                    </div>
                                </Box>
                                <div className="labelWrapper">
                                    S2
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="boxWrapper">
                                <Box sx={{ width: 360 }}>
                                    <div className="sliderWrapper">
                                        <Slider
                                            value={s3}
                                            onChange={setS3Value}
                                            valueLabelDisplay="auto"
                                            step={0.5}
                                            min={4}
                                            max={20}
                                            marks={marksS3}
                                            style={{color:'#60A5CA', width: 250}}
                                        />
                                    </div>
                                </Box>
                                <div className="labelWrapper">
                                    S3
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="boxWrapper">
                                <Box sx={{ width: 360 }}>
                                    <div className="sliderWrapper">
                                        <Slider
                                            value={s4}
                                            onChange={setS4Value}
                                            valueLabelDisplay="auto"
                                            step={0.05}
                                            min={-1}
                                            max={1}
                                            marks={marksS4}
                                            style={{color:'#60A5CA', width: 250}}
                                        />
                                    </div>
                                </Box>
                                <div className="labelWrapper">
                                    S4
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="boxWrapper">
                                <Box sx={{ width: 360 }}>
                                    <div className="sliderWrapper">
                                        <Slider
                                            value={u1}
                                            onChange={setU1Value}
                                            valueLabelDisplay="auto"
                                            step={0.1}
                                            min={0}
                                            max={2}
                                            marks={marksU1}
                                            style={{color:'#60A5CA', width: 250}}
                                        />
                                    </div>
                                </Box>
                                <div className="labelWrapper">
                                    U1
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="boxWrapper">
                                <Box sx={{ width: 360 }}>
                                    <div className="sliderWrapper">
                                        <Slider
                                            value={u2}
                                            onChange={setU2Value}
                                            valueLabelDisplay="auto"
                                            step={0.01}
                                            min={0}
                                            max={0.2}
                                            marks={marksU2}
                                            style={{color:'#60A5CA', width: 250}}
                                        />
                                    </div>
                                </Box>
                                <div className="labelWrapper">
                                    U2
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="boxWrapper">
                                <Box sx={{ width: 360 }}>
                                    <div className="sliderWrapper">
                                        <Slider
                                            value={u3}
                                            onChange={setU3Value}
                                            valueLabelDisplay="auto"
                                            step={0.01}
                                            min={0}
                                            max={1.2}
                                            marks={marksU3}
                                            style={{color:'#60A5CA', width: 250}}
                                        />
                                    </div>
                                </Box>
                                <div className="labelWrapper">
                                    U3
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="boxWrapper">
                                <Box sx={{ width: 360 }}>
                                    <div className="sliderWrapper">
                                        <Slider
                                            value={u4}
                                            onChange={setU4Value}
                                            valueLabelDisplay="auto"
                                            step={0.05}
                                            min={0}
                                            max={1.6}
                                            marks={marksU4}
                                            style={{color:'#60A5CA', width: 250}}
                                        />
                                    </div>
                                </Box>
                                <div className="labelWrapper">
                                    U4
                                </div>
                            </div>
                        </Grid>
                    </Box>
                    </div>
                }
            </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding:"10px"}}>
            <Box sx={{
                flexGrow: 1,
                width: "100%",
                height: 300,
                bgcolor: 'background.paper',
                boxShadow: 5,
                borderRadius: 2,
                }}>
            <div style={{display: "flex", padding: "10px"}}>
                {
                    <div style={{
                        // maxWidth: "100vw",
                        // padding: "10px",
                        overflowX: "auto",
                        display: "flex",
                        flexDirection: "row"}}>
                        {/*justifyContent: "space-between"}}>*/}
                            <TextField
                                id="u1 * P5/P4"
                                label="u1 * P5/P4"
                                placeholder="-40.179"
                                multiline
                                // style={{width: "120px", marginRight: 5}}
                            />
                            <TextField
                            id="u1 * P8/P4"
                            label="u1 * P8/P4"
                            placeholder="24.648"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="sin (P6)"
                            label="sin (P6)"
                            placeholder="0.624"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="u1 * tan (S6)"
                            label="u1 * tan (S2)"
                            placeholder="0.052"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="u3 * P3 * S4"
                            label="u3 * P3 * S4"
                            placeholder="-0.798"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="1 / cos (Q)"
                            label="1 / cos (Q)"
                            placeholder="-0.047"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="1 / cos (Q)"
                            label="u2 * 1 / P4 * P8"
                            placeholder="452.972"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="u3 * cos (P6)"
                            label="u3 * cos (P6)"
                            placeholder="1.654"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="u1 * 1 / cos (S4)"
                            label="u1 * 1 / cos (S4)"
                            placeholder="0.024"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="u1 * cos (P2)"
                            label="u1 * cos (P2)"
                            placeholder="0.713"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="P4 * P5"
                            label="P4 * P5"
                            placeholder="-0.004"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="u1 * tan (S1)"
                            label="u1 * tan (S1)"
                            placeholder="-0.22"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="u3 * S3 * S4"
                            label="u3 * S3 * S4"
                            placeholder="0.068"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="u2 * 1 / sin(P6)"
                            label="u2 * 1 / sin(P6)"
                            placeholder="-0.257"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="S4 ^ 2"
                            label="S4 ^ 2"
                            placeholder="-0.039"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="S4 ^ 2"
                            label="S4 ^ 2"
                            placeholder="-0.039"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="S4 ^ 2"
                            label="S4 ^ 2"
                            placeholder="-0.039"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="S4 ^ 2"
                            label="S4 ^ 2"
                            placeholder="-0.039"
                            multiline
                            // style={{width: "120px"}}
                            />
                            <TextField
                            id="S4 ^ 2"
                            label="S4 ^ 2"
                            placeholder="-0.039"
                            multiline
                            // style={{width: "120px"}}
                            />
                    </div>
                }
            </div>
            </Box>
        </div>
    </div>
  )
}

export default App;
