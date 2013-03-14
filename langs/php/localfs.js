
PHP_INI_DATA = '\
engine = On\n\
short_open_tag = Off\n\
asp_tags = Off\n\
precision = 14\n\
output_buffering = 4096\n\
zlib.output_compression = Off\n\
implicit_flush = Off\n\
unserialize_callback_func =\n\
serialize_precision = 17\n\
disable_functions =\n\
disable_classes =\n\
zend.enable_gc = On\n\
expose_php = On\n\
max_execution_time = 30\n\
max_input_time = 60\n\
memory_limit = 128M\n\
error_reporting = E_ALL\n\
display_errors = On\n\
display_startup_errors = Off\n\
log_errors = Off\n\
log_errors_max_len = 1024\n\
ignore_repeated_errors = Off\n\
ignore_repeated_source = Off\n\
report_memleaks = On\n\
track_errors = On\n\
html_errors = On\n\
variables_order = "GPCS"\n\
request_order = "GP"\n\
register_argc_argv = Off\n\
auto_globals_jit = On\n\
post_max_size = 8M\n\
auto_prepend_file =\n\
auto_append_file =\n\
default_mimetype = "text/html"\n\
doc_root =\n\
user_dir =\n\
enable_dl = Off\n\
file_uploads = On\n\
upload_tmp_dir = "tmp_files/"\n\
upload_max_filesize = 2M\n\
max_file_uploads = 20\n\
allow_url_fopen = On\n\
allow_url_include = Off\n\
default_socket_timeout = 60\n\
\n\
[CLI Server]\n\
cli_server.color = On\n\
\n\
[Date]\n\
[filter]\n\
[iconv]\n\
[intl]\n\
[sqlite]\n\
[sqlite3]\n\
[Pcre]\n\
[Pdo]\n\
[Pdo_mysql]\n\
pdo_mysql.cache_size = 2000\n\
pdo_mysql.default_socket=\n\
[Phar]\n\
[mail function]\n\
SMTP = localhost\n\
smtp_port = 25\n\
mail.add_x_header = On\n\
[SQL]\n\
sql.safe_mode = Off\n\
[ODBC]\n\
odbc.allow_persistent = On\n\
odbc.check_persistent = On\n\
odbc.max_persistent = -1\n\
odbc.max_links = -1\n\
odbc.defaultlrl = 4096\n\
odbc.defaultbinmode = 1\n\
[Interbase]\n\
ibase.allow_persistent = 1\n\
ibase.max_persistent = -1\n\
ibase.max_links = -1\n\
ibase.timestampformat = "%Y-%m-%d %H:%M:%S"\n\
ibase.dateformat = "%Y-%m-%d"\n\
ibase.timeformat = "%H:%M:%S"\n\
[MySQL]\n\
mysql.allow_local_infile = On\n\
mysql.allow_persistent = On\n\
mysql.cache_size = 2000\n\
mysql.max_persistent = -1\n\
mysql.max_links = -1\n\
mysql.default_port =\n\
mysql.default_socket =\n\
mysql.default_host =\n\
mysql.default_user =\n\
mysql.default_password =\n\
mysql.connect_timeout = 60\n\
mysql.trace_mode = Off\n\
[MySQLi]\n\
mysqli.max_persistent = -1\n\
mysqli.allow_persistent = On\n\
mysqli.max_links = -1\n\
mysqli.cache_size = 2000\n\
mysqli.default_port = 3306\n\
mysqli.default_socket =\n\
mysqli.default_host =\n\
mysqli.default_user =\n\
mysqli.default_pw =\n\
mysqli.reconnect = Off\n\
[mysqlnd]\n\
mysqlnd.collect_statistics = On\n\
mysqlnd.collect_memory_statistics = Off\n\
[OCI8]\n\
[PostgreSQL]\n\
pgsql.allow_persistent = On\n\
pgsql.auto_reset_persistent = Off\n\
pgsql.max_persistent = -1\n\
pgsql.max_links = -1\n\
pgsql.ignore_notice = 0\n\
pgsql.log_notice = 0\n\
[Sybase-CT]\n\
sybct.allow_persistent = On\n\
sybct.max_persistent = -1\n\
sybct.max_links = -1\n\
sybct.min_server_severity = 10\n\
sybct.min_client_severity = 10\n\
[bcmath]\n\
bcmath.scale = 0\n\
[browscap]\n\
[Session]\n\
session.save_handler = files\n\
session.use_cookies = 1\n\
session.use_only_cookies = 1\n\
session.name = PHPSESSID\n\
session.auto_start = 0\n\
session.cookie_lifetime = 0\n\
session.cookie_path = /\n\
session.cookie_domain =\n\
session.cookie_httponly =\n\
session.serialize_handler = php\n\
session.gc_probability = 1\n\
session.gc_divisor = 1000\n\
session.gc_maxlifetime = 1440\n\
session.bug_compat_42 = Off\n\
session.bug_compat_warn = Off\n\
session.referer_check =\n\
session.cache_limiter = nocache\n\
session.cache_expire = 180\n\
session.use_trans_sid = 0\n\
session.hash_function = 0\n\
session.hash_bits_per_character = 5\n\
url_rewriter.tags = "a=href,area=href,frame=src,input=src,form=fakeentry"\n\
[MSSQL]\n\
mssql.allow_persistent = On\n\
mssql.max_persistent = -1\n\
mssql.max_links = -1\n\
mssql.min_error_severity = 10\n\
mssql.min_message_severity = 10\n\
mssql.compatability_mode = Off\n\
mssql.secure_connection = Off\n\
[Assertion]\n\
[COM]\n\
[mbstring]\n\
[gd]\n\
[exif]\n\
[Tidy]\n\
tidy.clean_output = Off\n\
[soap]\n\
soap.wsdl_cache_enabled=1\n\
soap.wsdl_cache_dir="/tmp"\n\
soap.wsdl_cache_ttl=86400\n\
soap.wsdl_cache_limit = 5\n\
[sysvshm]\n\
[ldap]\n\
ldap.max_links = -1\n\
[mcrypt]\n\
[dba]\n\
';

PHP.Adapters.LocalFileSystem = function() {
}; 

PHP.Adapters.LocalFileSystem.prototype.lstatSync = function( filename ) {
    
    if (localStorage[ filename ] === undefined ) {
        throw Error; 
    } else {
        return true;
    }
    
}

PHP.Adapters.LocalFileSystem.prototype.error = function( e ) {
    console.log( e );
    throw e; 
}

PHP.Adapters.LocalFileSystem.prototype.writeFileSync = function( filename, data ) {
    localStorage[ filename ] = data;
};

PHP.Adapters.LocalFileSystem.prototype.readFileSync = function( filename, xhr ) {
    if (filename == 'cfg/php.ini') {
        return PHP_INI_DATA;
    } else {
        if (localStorage[ filename ] === undefined ) {
            throw Error; 
        } else {
            return localStorage[ filename ];
        }
    }

    
};
