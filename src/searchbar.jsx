import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [filterOptions, setFilterOptions] = useState([
        { id: 1, label: 'General Request', checked: false },
        { id: 2, label: 'Change Group Form', checked: false },
        { id: 3, label: 'Absent Form', checked: false },
        { id: 4, label: 'Examination Form', checked: false },
        { id: 5, label: 'Borrowing Form', checked: false },
        { id: 6, label: 'Make-up Form', checked: false },
    ]);
    const [statusFilterOptions, setStatusFilterOptions] = useState([
        { id: 1, label: 'Request', checked: false },
        { id: 2, label: 'Pending', checked: false },
        { id: 3, label: 'Approve', checked: false },
        { id: 4, label: 'Success', checked: false },
    ]);

    const formSubmitted = [
        {
            typeOfdocument: 'General Request',
            nameSurname: 'Keen',
            id: '6487014',
            branch: 'DST',
            date: '30/2/2024',
            status: 'Request'
        },
        {
            typeOfdocument: 'Change Group Form',
            nameSurname: 'Sun',
            id: '6487019',
            branch: 'DST',
            date: '30/2/2024',
            status: 'Request'
        },
        {
            typeOfdocument: 'Absent Form',
            nameSurname: 'Nai',
            id: '6487023',
            branch: 'DST',
            date: '30/2/2024',
            status: 'Pending'
        },
        {
            typeOfdocument: 'Examination Form',
            nameSurname: 'Jo',
            id: '6487048',
            branch: 'DST',
            date: '30/2/2024',
            status: 'Approve'
        },
        {
            typeOfdocument: 'Borrowing Form',
            nameSurname: 'Yu',
            id: '6487056',
            branch: 'DST',
            date: '30/2/2024',
            status: 'Success'
        },
        {
            typeOfdocument: 'Make-up Form',
            nameSurname: 'Pim',
            id: '6487085',
            branch: 'DST',
            date: '30/2/2024',
            status: 'Success'
        },
    ];

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const handleCheckboxChange = (index, filterType) => {
        if (filterType === 'type') {
            const updatedOptions = [...filterOptions];
            updatedOptions[index].checked = !updatedOptions[index].checked;
            setFilterOptions(updatedOptions);
        } else if (filterType === 'status') {
            const updatedOptions = [...statusFilterOptions];
            updatedOptions[index].checked = !updatedOptions[index].checked;
            setStatusFilterOptions(updatedOptions);
        }
    };

    const filteredData = formSubmitted.filter((item) => {
        const matchSearchTerm = item.id.includes(searchTerm);
        const matchFilterOptions =
            (filterOptions.every(option => !option.checked) || filterOptions.some(option => option.checked && option.label === item.typeOfdocument)) &&
            (statusFilterOptions.every(option => !option.checked) || statusFilterOptions.some(option => option.checked && option.label === item.status));
        return matchSearchTerm && matchFilterOptions;
    });

    return (
        <>
            <form onSubmit={handleSubmit} className="search-bar" style={{ display: 'flex', alignItems: 'center', width: '1200px', flexgrow: '1' }}>
                <button
                    type="submit"
                    className="search-button"
                    style={{
                        border: '1px solid black',
                        background: '#D8B7A2',
                        color: 'white',
                        padding: '5.5px',
                        borderRadius: '15% 0% 0% 15%',
                        width: '70px'
                    }}
                >
                    <FaSearch size={20} />
                </button>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                    style={{ border: '1px solid black', padding: '9.5px', flex: '1', borderRadius: '1px' }}
                />
                <button
                    type="button"
                    onClick={toggleFilters}
                    style={{
                        border: '1px solid black',
                        background: '#D8B7A2',
                        color: 'white',
                        padding: '5.5px',
                        borderRadius: '0% 15% 15% 0%',
                        width: '70px'
                    }}
                >
                    <FaFilter size={20} />
                </button>
                {showFilters && (
                    <div style={{ position: 'relative' }}>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-400px',
                                right: '0',
                                background: '#fff',
                                border: '1px solid black',
                                borderRadius: '8px',
                                padding: '16px',
                                zIndex: '999',
                                width: '250px',
                            }}
                        >
                            <div>
                                <h4 style={{fontFamily: 'Arial'}}>Type of Document</h4><br></br>
                                {filterOptions.map((option, index) => (
                                    <div key={option.id} style={{ marginBottom: '8px' }}>
                                        <label htmlFor={`filter-${option.id}`} style={{ marginLeft: '8px', fontSize: '12px', fontFamily: 'Arial' }}>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleCheckboxChange(index, 'type')}
                                                value={option.label}
                                                checked={option.checked}
                                            />
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <br></br>
                            <div>
                                <h4 style={{fontFamily: 'Arial'}}>Status</h4><br></br>
                                {statusFilterOptions.map((option, index) => (
                                    <div key={option.id} style={{ marginBottom: '8px' }}>
                                        <label htmlFor={`filter-${option.id}`} style={{ marginLeft: '8px',  fontSize: '12px', fontFamily: 'Arial' }}>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleCheckboxChange(index, 'status')}
                                                value={option.label}
                                                checked={option.checked}
                                            />
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </form>
            
            <br />

        </>

    );
};

export default SearchBar;
