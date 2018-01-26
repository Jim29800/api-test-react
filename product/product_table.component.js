// component for the whole products table
window.ProductsTable = React.createClass({
    render: function () {

        var rows = this.props.products
            .map(function (product, i) {
                return (
                    <ProductRow
                        key={i}
                        product={product}
                        changeAppMode={this.props.changeAppMode} />
                );
            }.bind(this));

        return (
            !rows.length
                ? <div className='alert alert-danger'>Aucun produit trouver.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Prix</th>
                            <th>Categorie</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        );
    }
});