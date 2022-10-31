const ctx = document.getElementById('myChart').getContext('2d');

export function generateBar(labels, datas, selectedDataName) {
    const title = document.getElementById('csvFile').files.item(0).name;
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: selectedDataName,
                data: datas,
                backgroundColor: [
                    'rgba(234, 85, 67, 0.2)',
                    'rgba(239, 156, 31, 0.2)',
                    'rgba(237, 190, 48, 0.2)',
                    'rgba(237, 224, 90, 0.2)',
                    'rgba(188, 207, 49, 0.2)',
                    'rgba(133, 187, 68, 0.2)',
                    'rgba(59, 173, 239, 0.2)',
                    'rgba(180, 61, 199, 0.2)',
                    'rgba(244, 108, 156, 0.2)'
                ],
                borderColor: [
                    'rgba(234, 85, 67, 1)',
                    'rgba(239, 156, 31, 1)',
                    'rgba(237, 190, 48, 1)',
                    'rgba(237, 224, 90, 1)',
                    'rgba(188, 207, 49, 1)',
                    'rgba(133, 187, 68, 1)',
                    'rgba(59, 173, 239, 1)',
                    'rgba(180, 61, 199, 1)',
                    'rgba(244, 108, 156, 1)'
                ],
                borderWidth: 1,
                hoverBorderWidth: 1.5,
                hoverBorderColor: 'rgba(0, 0, 0, 1)'
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: title
                }
            }
        }
    });
    return myChart;
}

export function generateLine(labels, datas, selectedDataName) {
    const title = document.getElementById('csvFile').files.item(0).name;
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: selectedDataName,
                data: datas,
                fill: false,
                borderColor: 'rgba(234, 85, 67, 1)',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: title
                }
            }
        }
    });
    return myChart;
}

export function generatePie(labels, datas, selectedDataName) {
    const title = document.getElementById('csvFile').files.item(0).name;
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: selectedDataName,
                data: datas,
                backgroundColor: [
                    'rgba(234, 85, 67, 0.2)',
                    'rgba(239, 156, 31, 0.2)',
                    'rgba(237, 190, 48, 0.2)',
                    'rgba(237, 224, 90, 0.2)',
                    'rgba(188, 207, 49, 0.2)',
                    'rgba(133, 187, 68, 0.2)',
                    'rgba(59, 173, 239, 0.2)',
                    'rgba(180, 61, 199, 0.2)',
                    'rgba(244, 108, 156, 0.2)'
                ],
                borderColor: 'rgba(0, 0, 0, 0.5',
                borderWidth: 0.5,
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: title
                }
            }
        }
    });
    return myChart;
}

export function generateRadar(labels, datas, selectedDataName) {
    const title = document.getElementById('csvFile').files.item(0).name;
    const myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: selectedDataName,
                data: datas,
                fill: true,
                backgroundColor: 'rgba(188, 207, 49, 0.2)',
                borderColor: 'rgba(188, 207, 49, 1)',
                pointBackgroundColor: 'rgba(188, 207, 49, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(188, 207, 49, 1)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: title
                }
            }
        }
    });
    return myChart;
}

export function generatePolarArea(labels, datas, selectedDataName) {
    const title = document.getElementById('csvFile').files.item(0).name;
    const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: labels,
            datasets: [{
                label: selectedDataName,
                data: datas,
                backgroundColor: [
                    'rgba(234, 85, 67, 0.2)',
                    'rgba(239, 156, 31, 0.2)',
                    'rgba(237, 190, 48, 0.2)',
                    'rgba(237, 224, 90, 0.2)',
                    'rgba(188, 207, 49, 0.2)',
                    'rgba(133, 187, 68, 0.2)',
                    'rgba(59, 173, 239, 0.2)',
                    'rgba(180, 61, 199, 0.2)',
                    'rgba(244, 108, 156, 0.2)'
                ]
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: title
                }
            }
        }
    });
    return myChart;
}