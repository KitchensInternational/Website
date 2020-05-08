import Ember from 'ember';

export default Ember.Controller.extend({
    // contactEmail: 'info@kitchensinternational.co.uk',
    contactEmail: 'blagojevicnemanja14@yahoo.com',
    actions: {
        submitBrief: function() {
            // let tempTitle = 'Design Brief';
            let message = "Hello\n\nthe following person has filled in the brief\n\n";
            message += this.get('name');
            message += " (" + this.get('email') + ")\n";
            message += "Phone: " + this.get('phone') + "\n";
            message += "Address: " + this.get('address') + "\n\n";
            message += "Brief is bellow: \n\n";
            message += "Additional parties \n\n";
            message += "ARCHITECT: " + this.get('architect') + "\n";
            message += "BUILDER/CONTRACTOR: " + this.get('builder') + "\n";
            message += "INTERIOR DESIGNER: " + this.get('interiorDesigner') + "\n\n";
            message += "Kitchen details \n";
            message += "What do you like about your current kitchen? What works well? What would you keep?:" + this.get('whatDoYouLike') + "\n";
            message += "What do you dislike about your current kitchen? What annoys you? What would you change?:" + this.get('whatDoYouDislike') + "\n";
            message += "Describe your new kitchen? What’s important to you? Dp you have a wish list?:" + this.get('describe') + "\n";
            message += "Have you seen anything that you like? Do you have a style in mind?:" + this.get('example') + " \n\n";
            message += "Appliances \n\n";

            message += "Oven: " + this.get('oven') + "\n";
            message += "Cooker Hood: " + this.get('cookerHood') + "\n";
            message += "Freezer: " + this.get('freezer') + "\n";
            message += "Waste Disposal: " + this.get('wasteDisposal') + "\n";
            message += "Steam - Combi Oven: " + this.get('steam') + "\n";
            message += "Coffee Machine: " + this.get('coffee') + "\n";
            message += "Washing Machine: " + this.get('washing') + "\n";
            message += "Wine Storage: " + this.get('wine') + "\n";
            message += "Microwave - Combi Oven: " + this.get('microwave') + "\n";
            message += "Dishwasher: " + this.get('dish') + "\n";
            message += "Tumble Dryer: " + this.get('dryer') + "\n";
            message += "Tap: " + this.get('tap') + "\n";
            message += "Fridge: " + this.get('fridge') + "\n";
            message += "Boiling/Filtered Water Tap: " + this.get('boiling') + "\n";
            message += "Sink: " + this.get('sink') + "\n\n";
            message += "Wine Storage \n\n";
            message += "Do you store wine in your kitchen?:" + this.get('wineBool') + " \n";
            message += "If yes, how many bottles of wine are stored in your kitchen?:" + this.get('bottleCount') + " \n";
            message += "If yes, what is the average cost per bottle of wine stored in your kitchen?:" + this.get('bottlePrice') + " \n\n";
            message += "SINKS & WORKTOPS \n\n";
            message += "How many sinks do you require? (e.g main sink, prep sink, drinks area):" + this.get('sinkCount') + " \n";
            message += "What is your preferred sink material?:" + this.get('sinkMaterial') + " \n";
            message += "What worktops would you like to include in your kitchen?:" + this.get('sinks') + " \n\n"; // TODO
            message += "Please select the level of installation you require for your new kitchen: " + this.get('oven') + "\n"; // TODO
            message += "What is the financial investment you are looking to make in your new kitchen?: " + this.get('oven') + "\n\n"; // TODO
            message += "What do you like about your current kitchen? What works well? What would you keep?: " + this.get('descProp') + "\n"; // TODO
            message += "Describe your project: " + this.get('help'); // TODO
            message += "Is the property listed: " + this.get('help'); // TODO
            message += "What is your expected completion date?: " + this.get('completionDate') + "\n"; 
            message += "What is your build time?: " + this.get('buildTime') + "\n\n";
            message += "About you \n\n";
            message += "How many people will use the new kitchen?" + this.get('usersCount') + "\n";
            message += "Will more than one person cook at the same time?" + this.get('sameTimeCooks') + "\n";
            message += "Will more than one person cook at the same time?" + this.get('sameTimeCooks') + "\n";
            message += "Do you entertain at home?" + this.get('requirements') + "\n"; // TODO
            message += "Do you dine in kitchen?" + this.get('requirements') + "\n"; // TODO
            message += "How much time will you spend in your kitchen?" + this.get('timeSpent') + "\n";
            message += "What type of cooking do you do? (Grilling, boiling, baking etc)" + this.get('cookingType') + "\n";
            message += "Describe weekday meals (i.e one person cooking, one seated)" + this.get('weekdayMeals') + "\n";
            message += "Describe weekend meals (i.e one person cooking, one seated)" + this.get('weekendMeals') + "\n";
            message += "How often do you shop?" + this.get('oftenShop') + "\n";
            message += "What fresh produce do you store? Do you bulk buy produce?" + this.get('freshProduce') + "\n";
            message += "Do you freeze a lot of produce?" + this.get('requirements') + "\n"; // TODO
            message += "Do you recycle materials?" + this.get('recycle') + "\n"; // TODO
            
            console.log(message);

            // console.log(this.get('emailAddress'));
            
            // Email.send("info@kitchensinternational.co.uk",
            // this.get('contactEmail'),
            // tempTitle,
            // message,
            // "email-smtp.eu-west-1.amazonaws.com",
            // "AKIAJ7ND2OHTKPBHEJJQ",
            // "ArtffMYr4ebRXP6acDyVan5H2bAohe05ySddBcW0YweD");
        }
    }
});
