import { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

export default function BarChart() {
  const [data] = useState([100, 200, 300, 123, 22]);
  const svgRef = useRef();

  useEffect(() => {
    // setting up svg container
    const w = 450;
    const h = 275;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");
    // setting the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.5);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([h, 0]);

    // setting the axes
    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(data.length);

    // Append the axes and set their style
    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${h})`)
      .selectAll("text")
      .style("fill", "#FFFFFF");
    svg.append("g").call(yAxis).selectAll("text").style("fill", "#FFFFFF");

    // setting the svg data
    svg
      .selectAll("bar")
      .data(data)
      .join("rect")
      .attr("x", (val, i) => xScale(i))
      .attr("y", (val) => yScale(val))
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => h - yScale(val))
      .style("fill", "#FFFFFF");
  }, [data]);

  return (
    <div className="bar-chart">
      <svg ref={svgRef} className="bar-chart_container"></svg>
    </div>
  );
}
