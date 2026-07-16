import { Check } from "lucide-react";
import { fees } from "@/lib/content";

export function FeesTable() {
  return (
    <div className="fees-table-wrap">
      <table className="fees-table">
        <caption className="sr-only">
          Betha Academy tuition and admission fees by class level
        </caption>
        <thead>
          <tr>
            <th scope="col">Class level</th>
            <th scope="col">Tuition fee</th>
            <th scope="col">Admission fee</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee) => (
            <tr key={fee.level}>
              <th scope="row">
                <span className="table-check" aria-hidden="true">
                  <Check size={15} />
                </span>
                {fee.level}
              </th>
              <td>{fee.tuition}</td>
              <td>{fee.admission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
