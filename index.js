function wakeDog(name, breed){
    let state = `Wake ${name} the ${breed}`;
    console.log(state);
    return state;
};

function leashDog(name, breed){
    let state = `Leash ${name} the ${breed}`;
    console.log(state);
    return state;
};

function walkToPark(name, breed){
    let state = `Walk to the park with ${name} the ${breed}`;
    console.log(state);
    return state;
};

function throwFrisbee(name, breed){
    let state = `Throw the frisbee for ${name} the ${breed}`;
    console.log(state);
    return state;
};

function walkHome(name, breed){
    let state = `Walk home with ${name} the ${breed}`;
    console.log(state);
    return state;
};

function unleashDog(name, breed){
    let state = `Unleash ${name} the ${breed}`;
    console.log(state);
    return state;
};


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(name, breed){
    let message = [];
    routine.forEach(action => message.push(action(name, breed)));
    return message;
};