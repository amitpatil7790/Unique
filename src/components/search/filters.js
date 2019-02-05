import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const filters = (props)=>{
	return(
		<div className="filter-section">
			<div className="price">
				<h5>price</h5>
				<InputRange
		          draggableTrack
		          maxValue={700}
		          minValue={50}
		          onChange={value => props.filterHandler(value)}
		          onChangeComplete={value => console.log(value)}
		          value={props.priceFilter} />
		        <div className="price-input">
		        	<input type="number" value={props.priceFilter.min} onChange={e=>props.priceHandler(e.target.value,'min')}/>
		        	<input type="number" value={props.priceFilter.max} onChange={e=>props.priceHandler(e.target.value,'max')}/> 
		        </div> 
			</div>
			<div className="color">
				<h5>color</h5>
				{
					props.filters.Color.map((v,i)=>{
						return(
							<label className="container" key={v.colorCode}>
							  {props.appliedFacets.color.indexOf(v.colorCode.toString())>-1
							  	?<input type="checkbox" value={v.colorCode} checked onChange={e=>props.facets(e,"color")}/>
							  	:<input type="checkbox" value={v.colorCode} onChange={e=>props.facets(e,"color")}/>
							  }
							  <span className="active">{v.name}</span>
							  <span className="colormark" style={{background:v.babyCode}}></span>
							</label>
						)
					})
				}
			</div>
			<div className="size">
				<h5>size</h5>
				{
					props.filters.Size.map((v,i)=>{
						return(
							<label className="container" key={i}>
								{props.appliedFacets.size.indexOf(v.sizeCode.toString())>-1
								  	?<input type="checkbox" value={v.sizeCode} checked onChange={e=>props.facets(e,"size")}/>
								  	:<input type="checkbox" value={v.sizeCode} onChange={e=>props.facets(e,"size")}/>
								}
								<span className="active">{v.name}</span>
								<span className="checkmark"></span>
							</label>
						)
					})
				}
			</div>
		</div>
	)
}

export default filters;