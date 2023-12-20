import React from "react";
import "./Address.css"


export default function Address() {
    return (
        <div>
            <h1>Наши адреса</h1>
            <table>
                <thead>
                <tr>
                    <th>Город</th>
                    <th>Адресс</th>
                    <th>График</th>
                    <th>Контактный тел.</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Алматы</td>
                    <td>Аксай 1А-10Б</td>
                    <td>Пн-Пт. 10:00-19:00</td>
                    <td>8 708 463 36 71</td>
                </tr>
                <tr>
                    <td>Алматы</td>
                    <td>Жетысу-3 д.20</td>
                    <td>Пн-Пт. 10:00-19:00</td>
                    <td>8 706 650 12 03</td>
                </tr>
                <tr>
                    <td>Талдыкорган</td>
                    <td>ул. Таукехан д. 97</td>
                    <td>Пн-Пт. 09:00-18:00</td>
                    <td>8 707 153 08 39</td>
                </tr>
                <tr>
                    <td>Астана</td>
                    <td>ул. Сарайшык, 34а </td>
                    <td>Пн-Пт. 09:00-18:00</td>
                    <td>8 702 114 50 76</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}