 let Car = {
    make: 'Ford',
    model: 'Raptor',
    year: 2014,
    milage: '',
    color: 'red',
    
    driveToWork: function () {
        console.log('driveToWork');
        
        this.milage = '33 miles'
        console.log('New Milage : ' + this.milage);
    },
    
    driveAroundTheWorld: function () {
        console.log('\n')
        console.log('driveAroundTheWorld');
        
        console.log('Old milage : ' + this.milage);
        
        this.milage = '24000 miles'
        console.log('New Milage : ' + this.milage);
    },
    
    runErrands: function () {
        console.log('\n')
        console.log('runErrands');
        
        console.log('Old milage : ' + this.milage);
        
        this.milage = '30 miles'
        console.log('New Milage : ' + this.milage);

    }
}

Car.driveToWork()
Car.driveAroundTheWorld()
Car.runErrands()