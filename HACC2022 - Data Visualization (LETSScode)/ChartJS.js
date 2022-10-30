export const ctx = document.getElementById('myChart').getContext('2d');

export function generateTest() {
    const testChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

export function generateBar(labels, datas) {
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'a',
                data: datas,
                backgroundColor: [],
                borderColor: [],
                borderWidth: 0,
                hoverBorderWidth: 0,
                hoverBorderColor: ''
            }]
        },
        options: {
            title: {
                display: true,
                text: 'a',
                fontSize: 0
            },
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: ''
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            }
        }
    });
}

export function generateLine(labels, datas) {
    const myChart = new Chart(ctx, {
        
    });
}

export function generatePie(labels, datas) {
    const myChart = new Chart(ctx, {
        
    });
}

export function generateRadar(labels, datas) {
    const myChart = new Chart(ctx, {
        
    });
}

export function generateScatter(labels, datas) {
    const myChart = new Chart(ctx, {
        
    });
}