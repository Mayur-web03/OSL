#include <iostream>
using namespace std;

int main() {
    int n, at[10], bt[10], rt[10], ct[10], tat[10], wt[10];
    int tq;

    cout << "Enter number of processes: ";
    cin >> n;

    cout << "Enter Arrival Time and Burst Time:\n";
    for(int i = 0; i < n; i++) {
        cout << "P" << i+1 << ": ";
        cin >> at[i] >> bt[i];
        rt[i] = bt[i];
    }

    cout << "Enter Time Quantum: ";
    cin >> tq;

    int time = 0, completed = 0;

    while(completed < n) {
        bool executed = false;

        for(int i = 0; i < n; i++) {
            if(at[i] <= time && rt[i] > 0) {
                executed = true;

                if(rt[i] > tq) {
                    time += tq;
                    rt[i] -= tq;
                }
                else {
                    time += rt[i];
                    ct[i] = time;
                    rt[i] = 0;
                    completed++;
                }
            }
        }

        if(!executed)
            time++;  
    }

    for(int i = 0; i < n; i++) {
        tat[i] = ct[i] - at[i];
        wt[i] = tat[i] - bt[i];
    }

    cout << "\nRound Robin Result\n";
    cout << "PID\tAT\tBT\tCT\tTAT\tWT\n";

    for(int i = 0; i < n; i++) {
        cout << "P" << i+1 << "\t"
             << at[i] << "\t"
             << bt[i] << "\t"
             << ct[i] << "\t"
             << tat[i] << "\t"
             << wt[i] << endl;
    }

    return 0;
}