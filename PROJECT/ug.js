
    // JavaScript to toggle visibility of sections
    function showManufacturing() {
        document.getElementById('manufacturing').style.display = 'block';
        document.getElementById('services').style.display = 'none';
        document.getElementById('ict').style.display = 'none';
        document.getElementById('oilgas').style.display = 'none';
    }
    function showServices() {
        document.getElementById('manufacturing').style.display = 'none';
        document.getElementById('services').style.display = 'block';
        document.getElementById('ict').style.display = 'none';
        document.getElementById('oilgas').style.display = 'none';
    }
    function showICT() {
        document.getElementById('manufacturing').style.display = 'none';
        document.getElementById('services').style.display = 'none';
        document.getElementById('ict').style.display = 'block';
        document.getElementById('oilgas').style.display = 'none';
    }
    function showOilAndGas() {
        document.getElementById('manufacturing').style.display = 'none';
        document.getElementById('services').style.display = 'none';
        document.getElementById('ict').style.display = 'none';
        document.getElementById('oilgas').style.display = 'block';
    }
