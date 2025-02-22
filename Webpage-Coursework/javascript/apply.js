let totalChanges = 0;



function displayForm(formId) {
    let array = document.getElementsByClassName("hidden_form");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display = "none";
    }

    document.getElementById(formId).style.display = "block";
    
    if (formId === 'tech') {
        document.getElementById("first").style.backgroundColor = "white";
        document.getElementById("second").style.backgroundColor = "gray";
        document.getElementById("third").style.backgroundColor = "gray";
    } else if (formId === 'innovation') {
        document.getElementById("first").style.backgroundColor = "gray";
        document.getElementById("second").style.backgroundColor = "white";
        document.getElementById("third").style.backgroundColor = "gray";

    } else {
        document.getElementById("first").style.backgroundColor = "gray";
        document.getElementById("second").style.backgroundColor = "gray";
        document.getElementById("third").style.backgroundColor = "white";
    }
}

function clearTable() {
    let array = document.getElementsByClassName("tableData");
    
    for (let i = 0; i < array.length; i++) {
        array[i].innerHTML = "";
    }
    let date = new Date();
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById('lct').textContent = "Last change time: " + date.toString();
    totalChanges = 0;
    document.getElementById("totalNumber").textContent = "Total Number of Companies Applied: " + totalChanges; 

}
/* updating table*/

document.querySelectorAll('form._1').forEach(function(form) {
    
    form.addEventListener('submit', function(event) {
        console.log(1)
        event.preventDefault();
        let zoneName = document.getElementById('first').textContent;
        let companyName = this.querySelector('label').textContent;
        let rank = this.querySelector('input[type="text"]').value;

        updateTable(zoneName, companyName, rank);
    });
});

document.querySelectorAll('form._2').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let zoneName = document.getElementById('second').textContent;
        let companyName = this.querySelector('label').textContent;
        let rank = this.querySelector('input[type="text"]').value;
        updateTable(zoneName, companyName, rank);
    });
});
document.querySelectorAll('form._3').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let zoneName = document.getElementById('third').textContent;
        let companyName = this.querySelector('label').textContent;
        let rank = this.querySelector('input[type="text"]').value;
        updateTable(zoneName, companyName, rank);
    });
});

function updateTable(zoneName, companyName, rank) {
    if (rank === '' || !Number.isInteger(Number(rank))) {
        alert("Please enter the rank of the chosen company");
        return;
    }

    rank = parseInt(rank);

    if (rank < 1 || rank > 10) {
        alert("Please enter the rank of the chosen company between 1 and 10");
        return;
    }
    let zoneCell = document.getElementById('zone' + rank);
    let companyCell = document.getElementById('company' + rank);

    let isRankDuplicated = zoneCell.textContent.trim() !== '' || companyCell.textContent.trim() !== '';
    let isCompanyDuplicated = checkDuplicateCompanyName(companyName, rank);

    if (isCompanyDuplicated) {
        alert("You have already chosen this company");
    } else if (isRankDuplicated) {
        alert( "You have already chosen this rank");
    } else {
        alert("You have chosen " + companyName + " as your " + rankNumber(rank) + " chosen company in " + zoneName + "  successfully ")
        document.getElementById('rank' + rank).textContent = rank;
        zoneCell.textContent = zoneName;
        companyCell.textContent = companyName;

        totalChanges++;
        document.getElementById('totalNumber').textContent = "Total number companies applied: " + totalChanges;
        let date = new Date();
        let lastChangeTime = date.toString();
        document.getElementById('lct').textContent = "Last change time: " + lastChangeTime;
    }
}

function checkDuplicateCompanyName(companyName, currentRank) {
    let companyCells = document.querySelectorAll('td[id^="company"]');
    for (let i = 0; i < companyCells.length; i++) {
        let rank = companyCells[i].id.replace('company', '');
        if (rank !== currentRank && companyCells[i].textContent.trim().toLowerCase() === companyName.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function rankNumber(x){
    if (x == 1) {
        return "1st";
    } 
    else if (x == 2) {
        return "2nd";
    } 
    else if (x == 3) {
        return "3rd";
    } 
    else {
        return x + "th";
    }
}

function submitApplication() {
    let dataInTable = document.getElementsByClassName("tableData");

    function emptyError() {
      for (let i = 0; i < dataInTable.length; i++) {
        if (dataInTable[i].innerHTML.trim() !== "") {
          return true;
        }
      }
      return false;
    }
    
    let arrayZones = [];
  
    function arraycell() {
      for (let i = 1; i < 11; i++) {
        arrayZones.push(document.getElementById("zone" + i).innerHTML);
      }
    }
  
    arraycell();
    
    
    function isGap(array) {
    let gapError = false;
    let gapArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === undefined) {
        gapError = true;
        gapArray.push(i);
      } else if (array[i] !== undefined && gapArray.length > 0) {
        
        break;
      }
    }
  
    return {
      gapError: gapError,
      gapArray: gapArray
    };
    }
    function isGap(array) {
        let gapError = false;
        let gapArray = [];

        for (let i = 0; i < array.length; i++) {
        if (array[i] === "") {
            gapError = true;
            gapArray.push(i+1);
        }
        }

        return {
        gapError: gapError,
        gapArray: gapArray
        };
    }
    function deletingElements(arr) {
        let lastIndex = arr.length - 1;
        
        while (lastIndex >= 0 && !arr[lastIndex]) {
        arr.pop();
        lastIndex--;
        }
        
        return arr;
    }
    
    let cl = deletingElements(arrayZones);
    
    let newest = isGap(cl);
    
    if (!emptyError()) {
        message = "You have not chosen any company";
        document.getElementById("errorMessage").innerHTML = message;
    } 
    else if(newest.gapError){
        let list = [];
        for (let i = 0; i < newest.gapArray.length; i++) {
            let index = newest.gapArray[i];
            if (index === 1) {
                list.push(index + "st chosen company, ");
            } 
            else if (index === 2) {
                list.push(index + "nd chosen company, ");
            } 
            else if (index === 3) {
                list.push(index + "rd chosen company, ");
            } 
            else {
                list.push(index + "th chosen company, ");
            }
        
        }
    
        let message = "You have not chosen your "
        for (let i=0; i<list.length; i++){
            message += list[i]
        }
        message += "you can not leave any gap between companies"
        document.getElementById("errorMessage").innerHTML = message
    } 
    else {
        let Time = new Date();
        document.getElementById("errorMessage").innerHTML = "You have successfully submitted your application at time " + Time.toString();
    }
    
    
    
  
}

