document.addEventListener('DOMContentLoaded', function() {
    const selectCity = document.getElementById('selectCity');
    const selectHospital = document.getElementById('selectHospital');
    const doctorCards = document.querySelectorAll('.doctor-card');

    // Update hospital options based on the selected city
    selectCity.addEventListener('change', function() {
        const selectedCity = selectCity.value;
        updateHospitalOptions(selectedCity);
        filterDoctorCards();
    });

    // Filter doctor cards based on the selected options
    selectHospital.addEventListener('change', filterDoctorCards);

    function updateHospitalOptions(city) {
        const hospitalOptions = {
            All: ['All'],
            Taunggyi: ['All', 'Sao San Htun', 'Pun Hlaing', 'Women and Children'],
            Yangon: ['All', 'HospitalY1', 'HospitalY2', 'HospitalY3'],
            Mandalay: ['All', 'HospitalM1', 'HospitalM2', 'HospitalM3'],
        };

        const hospitals = hospitalOptions[city] || [];
        const hospitalSelect = selectHospital;
        hospitalSelect.innerHTML = '';

        hospitals.forEach(hospital => {
            const option = document.createElement('option');
            option.value = hospital;
            option.textContent = hospital;
            hospitalSelect.appendChild(option);
        });
    }

    function filterDoctorCards() {
        const selectedCity = selectCity.value;
        const selectedHospital = selectHospital.value;

        doctorCards.forEach((card) => {
            const cardCity = card.dataset.city;
            const cardHospital = card.dataset.hospital;

            const isCityMatch = selectedCity === 'All' || selectedCity === cardCity;
            const isHospitalMatch = selectedHospital === 'All' || selectedHospital === cardHospital;

            card.style.display = isCityMatch && isHospitalMatch ? 'block' : 'none';
        });
    }

    // Initially, populate hospital options for 'All' city and filter doctor cards
    updateHospitalOptions('All');
    filterDoctorCards();
});