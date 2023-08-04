
//average value of 8l/100km -- average emission of 2.37kg/l
function calculationPetrol(km) {
    const petrolEmissionInKg = 0.189; 
    return petrolEmissionInKg * km;
}

// average value of 7l/100km -- average emission of 2.65kg/l
function calculationDiesel(km) {
    const dieselEmissionInKg = 0.1855; 
    return dieselEmissionInKg * km;
}

// average value of 4l/100km -- average emission of 2.37kg/l
function calculationHybrid(km) {
    const hybridEmissionInKg = 0.0948; 
    return hybridEmissionInKg * km;
}

// average value of 18kWh/100km -- average emission of 0,434kg/kWh
function calculationElectricStrommix(km) {
    const strommixEmissionInKg = 0.07812;
    return strommixEmissionInKg * km;
}

function calculationElectricEco(km) {
    const ecoEmissionInKg = 0.0;
    return ecoEmissionInKg * km;
}

function calculationPlane(km) {
    const planeEmissionInKg = 0.230;
    return planeEmissionInKg * km;
}

// average value for long-distance traffic
function calculationTrain(km) {
    const trainEmissionInKg = 0.032;
    return trainEmissionInKg * km;
}

function calculationBicycle(km) {
    const bicycleEmissionInKg = 0.0;
    return bicycleEmissionInKg * km;
}
