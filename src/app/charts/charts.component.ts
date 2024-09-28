import { Component, OnInit } from '@angular/core';
// Import everything from Chart.js that we need
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  constructor() {
    // Manually register required components for Chart.js
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement);
  }

  ngOnInit(): void {
    this.createAreaChart();
    this.createDonutChart();
  }

  createAreaChart(): void {
    const ctx = document.getElementById('areaChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Sales',
            data: [12000, 15000, 8000, 12000, 18000, 20000, 24000],
            borderColor: '#4e73df',
            fill: true,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    } else {
      console.error('Area Chart canvas not found!');
    }
  }

  createDonutChart(): void {
    const ctx = document.getElementById('donutChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Blue', 'Red', 'Green', 'Yellow'],
          datasets: [{
            data: [12, 19, 3, 5],
            backgroundColor: ['#4e73df', '#e74a3b', '#1cc88a', '#f6c23e'],
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    } else {
      console.error('Donut Chart canvas not found!');
    }
  }
}
