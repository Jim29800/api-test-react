// component that contains the functionalities that appear on top of
// the products table: create product
window.TopActionsComponent = React.createClass({
    render: function () {
        return (
            <div>
                <a href='#'
                    onClick={() => this.props.changeAppMode('create')}
                    className='btn btn-primary margin-bottom-1em'> Ajouter un produit
                </a>
            </div>
        );
    }
});