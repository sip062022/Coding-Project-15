// Task 2: Adding Risk Items Dynamically //

function addRiskItem(riskName, riskLevel, department) { // adds in function to add risk item
    if (riskName && riskLevel && department) { // only appends card if all values filled
    const riskDashboard = document.getElementById('riskDashboard');  // gets elements from risk dashboard // TASK 1  //
    console.log('Risk Dashboard Loaded');  // Logs message in console // TASK 1 //

    const riskCard = document.createElement('div'); // creates the risk card
    riskCard.classList.add('riskCard'); // adds the risk card

    const riskNameHeader = document.createElement('h3'); // create risk name element
    riskNameHeader.textContent = riskName; // Logs the risk name

    const riskLevelParagraph = document.createElement('p'); // create risk level element
    riskLevelParagraph.textContent = `Risk Level: ${riskLevel}`; // Logs the risk level
    riskLevelParagraph.classList.add('riskLevel'); // assigns class

    const departmentParagraph = document.createElement('p'); // create risk level element
    departmentParagraph.textContent = `Department: ${department}`; // Logs the risk level
    departmentParagraph.classList.add('department'); // assigns class

    // TASK 3: Adding Resolve Button //

    const resolveButton = document.createElement('button'); // creates constant for the resolve button
    resolveButton.textContent = 'Resolve'; // creates text label for the button
        resolveButton.classList.add('resolveButton'); // Adds class

    resolveButton.addEventListener('click', function() { // adds function to listen for click
         riskDashboard.removeChild(riskCard);  // removes card when clicked
    });

    // End of Task 3 //
    
    // Task 4: Categorizing Risks by Level //
    
    if (riskLevel === 'Low') {  // if low risk level
        riskCard.style.backgroundColor = '#00FF00'; // green background color
    } else if (riskLevel === 'Medium') {  // if medium risk level
        riskCard.style.backgroundColor = '#FFFF00';  // yellow background color
    } else if (riskLevel === 'High') { // if high risk level
        riskCard.style.backgroundColor = '#FF0000';  // red background color
    }

    // End of Task 4 //

    riskCard.appendChild(riskNameHeader); // appends the riskNameHeader
    riskCard.appendChild(riskLevelParagraph); // appends the riskLevelParagraph
    riskCard.appendChild(departmentParagraph); // appends the departmentParagraph
    riskCard.appendChild(resolveButton); // appends the resolve button

    riskDashboard.appendChild(riskCard); // appends the risk card
    } else {
        console.log('All fields must be filled!'); // error message to fill out all fields
    }
}
    const form = document.getElementById('addRiskForm');  // allows form to insert new risks
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent page reload on form submit

    const riskName = document.getElementById('riskName').value; // gets risk name value
    const riskLevel = document.getElementById('riskLevel').value; // gets risk level value
    const department = document.getElementById('department').value; // gets department value

    addRiskItem(riskName, riskLevel, department);  // adds the values 

    form.reset(); // resets the form
    });


addRiskItem("Data Breach", "High", "IT"); // test data
addRiskItem("Supply Chain Disruption", "Medium", "Operations"); // test data
addRiskItem("Market Fluctuations", "High", "Finance"); // test data
addRiskItem("Employee Retention", "Low", "HR"); // test data

// Task 5: Implementing Bulk Updates //

function increaseRiskLevels() {  // creates function to increase all risk levels
    const riskDashboard = document.getElementById('riskDashboard');  // gets risk dashboard info
    const riskCards = riskDashboard.getElementsByClassName('riskCard'); // gets risk card info

    for (let i = 0; i < riskCards.length; i++) {  // for all risk cards
        const card = riskCards[i];
        const riskLevelParagraph = card.querySelector('.riskLevel');  // get risk level from all

        let currentRiskLevel = riskLevelParagraph.textContent.replace("Risk Level: ", "");  // replace the risk level

        if (currentRiskLevel === "Low") {  // if low risk 
            currentRiskLevel = "Medium"; // change to medium
            riskLevelParagraph.textContent = `Risk Level: Medium`;  // changes the text to medium
            card.style.backgroundColor = "#FFFF00";  // changes the background to yellow
        } else if (currentRiskLevel === "Medium") {  // if risk level if medium
            currentRiskLevel = "High"; // change to high
            riskLevelParagraph.textContent = `Risk Level: High`;  // changes text to high
            card.style.backgroundColor = "#FF0000";  // changes background to red
        }
    }
}

const increaseRiskLevelsButton = document.createElement('button'); // creates button
increaseRiskLevelsButton.textContent = 'Increase Risk Levels';  // labels button as "Inicrease Risk Levels"
increaseRiskLevelsButton.classList.add('increaseRiskLevelsButton'); // adds the class

increaseRiskLevelsButton.addEventListener('click', increaseRiskLevels);  // creates listener for the button

riskDashboard.appendChild(increaseRiskLevelsButton); // appends the button