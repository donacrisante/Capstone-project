
const calculator = [
    //average value of 8l/100km -- average emission of 2.37kg/l
    { petrol: function calculationPetrol(km) {
        const petrolEmissionInKg = 0.189; 
        return Math.round((petrolEmissionInKg * km) * 100) / 100;
    }},
    // average value of 7l/100km -- average emission of 2.65kg/l
    { diesel: function calculationDiesel(km) {
        const dieselEmissionInKg = 0.1855; 
        return Math.round((dieselEmissionInKg * km) * 100) / 100;
    }},
    // average value of 4l/100km -- average emission of 2.37kg/l
    { hybrid: function calculationHybrid(km) {
        const hybridEmissionInKg = 0.0948; 
        return Math.round((hybridEmissionInKg * km) * 100) / 100;
    }},
    // average value of 18kWh/100km -- average emission of 0,434kg/kWh
    { electricStrommix: function calculationElectricStrommix(km) {
        const strommixEmissionInKg = 0.07812;
        return Math.round((strommixEmissionInKg * km) * 100) / 100;
    }},
    { electricEco: function calculationElectricEco(km) {
        const ecoEmissionInKg = 0.0;
        return ecoEmissionInKg * km;
    }},
    { plane: function calculationPlane(km) {
        const planeEmissionInKg = 0.230;
        return Math.round((planeEmissionInKg * km) * 100) / 100;
    }},
    // average value for long-distance traffic
    { train: function calculationTrain(km) {
    const trainEmissionInKg = 0.032;
    return Math.round((trainEmissionInKg * km) * 100) / 100;
    }},
    { bicycle: function calculationBicycle(km) {
        const bicycleEmissionInKg = 0.0;
        return bicycleEmissionInKg * km;
    }}
]





















