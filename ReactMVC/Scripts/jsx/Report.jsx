
class EventProgramRow extends React.Component {
    render() {
        const program = this.props.program;
        return (
          <tr>
            <th colSpan="6">
              <span className="text-primary"><h4> {program}</h4></span>
            </th>
          </tr>
      );
    }
}


class EventRow extends React.Component {
    render() {
        const event = this.props.event;
      

        return (
          <tr className="row">
            <td><span className="small">{event.eventID}</span></td>
              <td></td>
            <td><span className="small">{event.description}</span></td>
              <td></td>
            <td><span className="small">{event.datestart}</span></td>
              <td></td>
             <td>  <span className="small">{event.dateends}</span></td>
          </tr>
        );
    }
}





class EventTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        

        const rows = [];
        let lastCategory = null;

        this.props.events.forEach((event) => {
            if ((event.description.toLowerCase().indexOf(filterText.toLowerCase()) === -1) && (event.program.toLowerCase().indexOf(filterText.toLowerCase()) === -1)){
               
                return;
            }
           
            if (event.program !== lastCategory) {
                rows.push(<EventProgramRow  program={event.program}  key={event.program} /> );
        } 

            rows.push(<EventRow event={event}   key={event.description}  />  );
        lastCategory = event.description;
    });

return (
 <table className="table">
   <thead  >
     <tr>
       <th ><span className="small">ID</span></th>
         <th></th>
       <th > <span className="small">Event</span></th>
         <th></th>
       <th ><span className="small"> Starts:</span></th>
         <th></th>
       <th > <span className="small"> Ends:</span></th>
     </tr>
   </thead>
   <tbody>{rows}</tbody>
 </table>
);
    }
}





class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        
    }
  
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
  
  
    render() {
        return (
          <form>
            <input     type="text"      placeholder="Search Event..."    value={this.props.filterText}  onChange={this.handleFilterTextChange}  />
         </form>
        );
            }
}





class FilterableEventTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            posts:[]
        };
    
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

   
  
    componentDidMount() {
        $.get(this.props.url , function (data) {
            
            this.setState({
                posts: data
            });
            
        }.bind(this));

    }  
  
   

    render() {
        return (
          <div>
            <SearchBar  filterText={this.state.filterText}    onFilterTextChange={this.handleFilterTextChange}  />
            <EventTable    events={this.state.posts}    filterText={this.state.filterText}      />
        </div>
        );
            }
}





ReactDOM.render(
  <FilterableEventTable url="/Reports/GetEvents" />,
  document.getElementById('container')
);

