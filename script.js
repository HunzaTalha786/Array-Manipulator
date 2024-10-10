let array = [];

        // Function to display the array
        function displayArray() {
            const arrayDisplay = document.getElementById('display');
            arrayDisplay.innerHTML = ''; 

            array.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'array-item';
                itemDiv.textContent = item;
                arrayDisplay.appendChild(itemDiv);
            });
        }

        function addArrays() {
            const element = document.getElementById('element').value;
            if (element) {
                array.push(element);
                // Clear input
                document.getElementById('element').value = ''; 
                displayArray();
            }
        }

        function push() {
            array.push(prompt("Write element to push in array.."));
            displayArray();
            document.getElementById("message").textContent =
              "Push() array method add element in last.";
        }

        function pop() {
            array.pop();
            displayArray();
            document.getElementById("message").textContent =
            "Pop() array method remove element in last.";
        }

        function shift() {
            array.shift();
            displayArray();
            document.getElementById("message").textContent =
            "shift() array method remove element in start.";
        }

        function unshift() {
          array.unshift(prompt("Write element to unshift in array.."));
            displayArray();
            document.getElementById("message").textContent =
            "Unshift() array method add element in start.";
        }

        function splice() {
            const index = parseInt(prompt("Enter index to splice:"));
            const count = parseInt(prompt("Enter number of elements to remove:"));
            const spliceArray =array.splice(index, count);
            alert("Removed items: " + spliceArray);
            displayArray();
        }

        function slice() {
            const start = parseInt(prompt("Enter start index:"));
            const end = parseInt(prompt("Enter end index:"));
            const slicedArray = array.slice(start, end);
            alert(`Sliced Array: { ${slicedArray.join(', ')} }`);
        }


        function restart(){
            
            document.getElementById('element').value="";
           document.getElementById('message').textContent="";
           document.getElementById('display').textContent="";
           array = [];

       }
       