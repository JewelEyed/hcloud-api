/**
 * Actions show the results and progress of asynchronous requests to the API.
 */
export type action = {
    /**
     * Command executed in the Action.
     */
    command: string;
    error: error;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: (string) | null;
    /**
     * ID of the Action
     */
    id: number;
    /**
     * Progress of the Action in percent.
     */
    progress: number;
    /**
     * Resources the Action relates to.
     */
    resources: Array<resource>;
    /**
     * Point in time when the Action was started (in ISO-8601 format).
     */
    started: string;
    /**
     * Status of the Action.
     */
    status: 'error' | 'running' | 'success';
};
/**
 * Status of the Action.
 */
export type status = 'error' | 'running' | 'success';
/**
 * Actions show the results and progress of asynchronous requests to the API.
 */
export type action_optional = {
    /**
     * Command executed in the Action.
     */
    command: string;
    error: error;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: (string) | null;
    /**
     * ID of the Action
     */
    id: number;
    /**
     * Progress of the Action in percent.
     */
    progress: number;
    /**
     * Resources the Action relates to.
     */
    resources: Array<resource>;
    /**
     * Point in time when the Action was started (in ISO-8601 format).
     */
    started: string;
    /**
     * Status of the Action.
     */
    status: 'error' | 'running' | 'success';
} | null;
export type add_route_to_network_request = route;
/**
 * Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_route
 */
export type add_route_to_network_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/add_to_placement_group
 */
export type add_server_to_placement_group_request = {
    /**
     * ID of Placement Group the Server should be added to
     */
    placement_group: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/add_to_placement_group
 */
export type add_server_to_placement_group_response = {
    action: action;
};
export type add_service_request = load_balancer_service;
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/add_service
 */
export type add_service_response = {
    action: action;
};
export type add_subnet_to_network_request = subnet;
/**
 * Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_subnet
 */
export type add_subnet_to_network_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/add_target
 */
export type add_target_request = {
    /**
     * IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip".
     */
    ip?: {
        /**
         * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
         */
        ip: string;
    };
    label_selector?: label_selector;
    /**
     * Configuration for type Server, required if type is `server`
     */
    server?: {
        /**
         * ID of the Server
         */
        id: number;
    };
    /**
     * Type of the resource
     */
    type: 'ip' | 'label_selector' | 'server';
    /**
     * Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the same network.
     */
    use_private_ip?: boolean;
};
/**
 * Type of the resource
 */
export type type = 'ip' | 'label_selector' | 'server';
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/add_target
 */
export type add_target_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/apply_to_resources
 */
export type apply_to_resources_request = {
    /**
     * Resources the Firewall should be applied to
     */
    apply_to: Array<firewall_resource>;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/apply_to_resources
 */
export type apply_to_resources_response = {
    actions: Array<action>;
};
/**
 * Type of cpu architecture this image is compatible with. | Type of cpu architecture
 */
export type architecture = 'arm' | 'x86';
/**
 * Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).
 */
export type architecture_optional = 'arm' | 'x86';
/**
 * Request for POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/assign
 */
export type assign_floating_ip_to_server_request = {
    /**
     * [Server](#servers) the [Floating IP](#floating-ips) is assigned to.
     *
     * `null` if not assigned.
     *
     */
    server: (number) | null;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/assign
 */
export type assign_floating_ip_to_server_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/assign
 */
export type assign_primary_ip_to_resource_request = {
    /**
     * ID of a resource of type `assignee_type`
     */
    assignee_id: number;
    /**
     * Type of resource assigning the Primary IP to
     */
    assignee_type: 'server';
};
/**
 * Type of resource assigning the Primary IP to
 */
export type assignee_type = 'server';
/**
 * Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/assign
 */
export type assign_primary_ip_to_resource_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/attach_iso
 */
export type attach_iso_to_server_request = {
    /**
     * ID or name of ISO to attach to the Server as listed in GET `/isos`
     */
    iso: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/attach_iso
 */
export type attach_iso_to_server_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/attach_to_network
 */
export type attach_load_balancer_to_network_request = {
    /**
     * IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address
     */
    ip?: string;
    /**
     * ID of an existing network to attach the Load Balancer to
     */
    network: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/attach_to_network
 */
export type attach_load_balancer_to_network_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/attach_to_network
 */
export type attach_server_to_network_request = {
    /**
     * Additional IPs to be assigned to this Server
     */
    alias_ips?: Array<(string)>;
    /**
     * IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address
     */
    ip?: string;
    /**
     * ID of an existing network to attach the Server to
     */
    network: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/attach_to_network
 */
export type attach_server_to_network_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/volumes/{id}/actions/attach
 */
export type attach_volume_to_server_request = {
    /**
     * Auto-mount the Volume after attaching it
     */
    automount?: boolean;
    /**
     * ID of the Server the Volume will be attached to
     */
    server: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/attach
 */
export type attach_volume_to_server_response = {
    action: action;
};
/**
 * TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.
 */
export type certificate = {
    /**
     * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
     */
    certificate: (string) | null;
    /**
     * Point in time when the Resource was created (in ISO-8601 format).
     */
    created: string;
    /**
     * Domains and subdomains covered by the Certificate
     */
    domain_names: Array<(string)>;
    /**
     * SHA256 fingerprint of the Certificate
     */
    fingerprint: (string) | null;
    /**
     * ID of the Certificate.
     */
    id: number;
    labels: labels;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Point in time when the Certificate stops being valid (in ISO-8601 format)
     */
    not_valid_after: (string) | null;
    /**
     * Point in time when the Certificate becomes valid (in ISO-8601 format)
     */
    not_valid_before: (string) | null;
    /**
     * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
     */
    status?: {
        /**
         * If issuance or renewal reports `failed`, this property contains information about what happened
         */
        error?: {
            code?: string;
            message?: string;
        } | null;
        /**
         * Status of the issuance process of the Certificate
         */
        issuance?: 'completed' | 'failed' | 'pending';
        /**
         * Status of the renewal process of the Certificate.
         */
        renewal?: 'failed' | 'pending' | 'scheduled' | 'unavailable';
    } | null;
    /**
     * Type of the Certificate
     */
    type?: 'managed' | 'uploaded';
    /**
     * Resources currently using the Certificate
     */
    used_by: Array<resource>;
};
/**
 * Status of the issuance process of the Certificate
 */
export type issuance = 'completed' | 'failed' | 'pending';
/**
 * Status of the renewal process of the Certificate.
 */
export type renewal = 'failed' | 'pending' | 'scheduled' | 'unavailable';
/**
 * Type of the Certificate
 */
export type type2 = 'managed' | 'uploaded';
export type change_algorithm_request = load_balancer_algorithm;
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_algorithm
 */
export type change_algorithm_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_alias_ips
 */
export type change_alias_ips_of_network_request = {
    /**
     * New alias IPs to set for this Server
     */
    alias_ips: Array<(string)>;
    /**
     * ID of an existing Network already attached to the Server
     */
    network: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_alias_ips
 */
export type change_alias_ips_of_network_response = {
    action: action;
};
export type change_floating_ip_protection_request = protection;
/**
 * Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/change_protection
 */
export type change_floating_ip_protection_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/images/{id}/actions/change_protection
 */
export type change_image_protection_request = {
    /**
     * If true, prevents the snapshot from being deleted
     */
    delete?: boolean;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/images/{id}/actions/change_protection
 */
export type change_image_protection_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/change_ip_range
 */
export type change_ip_range_of_network_request = {
    /**
     * IP range in CIDR block notation of the whole network.
     *
     * Must span all included subnets. Must be one of the private IPv4 ranges of RFC1918.
     *
     * Minimum network size is /24. We highly recommend that you pick a larger network with a /16 netmask.
     *
     */
    ip_range: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/change_ip_range
 */
export type change_ip_range_of_network_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_protection
 */
export type change_load_balancer_protection_request = {
    /**
     * If true, prevents the Load Balancer from being deleted
     */
    delete?: boolean;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_protection
 */
export type change_load_balancer_protection_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/change_protection
 */
export type change_network_protection_request = {
    /**
     * If true, prevents the Network from being deleted
     */
    delete?: boolean;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/change_protection
 */
export type change_network_protection_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_protection
 */
export type change_primary_ip_protection_request = {
    /**
     * If true, prevents the Primary IP from being deleted
     */
    delete?: boolean;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_protection
 */
export type change_primary_ip_protection_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_dns_ptr
 */
export type change_reverse_dns_entry_for_primary_ip_request = {
    /**
     * Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`
     */
    dns_ptr: (string) | null;
    /**
     * IP address for which to set the reverse DNS entry
     */
    ip: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_dns_ptr
 */
export type change_reverse_dns_entry_for_primary_ip_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_dns_ptr
 */
export type change_reverse_dns_entry_for_this_load_balancer_request = {
    /**
     * Hostname to set as a reverse DNS PTR entry
     */
    dns_ptr: (string) | null;
    /**
     * Public IP address for which the reverse DNS entry should be set
     */
    ip: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_dns_ptr
 */
export type change_reverse_dns_entry_for_this_load_balancer_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_dns_ptr
 */
export type change_reverse_dns_entry_for_this_server_request = {
    /**
     * Hostname to set as a reverse DNS PTR entry, reset to original value if `null`
     */
    dns_ptr: (string) | null;
    /**
     * Primary IP address for which the reverse DNS entry should be set
     */
    ip: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_dns_ptr
 */
export type change_reverse_dns_entry_for_this_server_response = {
    action: action;
};
export type change_reverse_dns_records_for_floating_ip_request = dns_ptr;
/**
 * Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/change_dns_ptr
 */
export type change_reverse_dns_records_for_floating_ip_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_protection
 */
export type change_server_protection_request = {
    /**
     * If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value)
     */
    delete?: boolean;
    /**
     * If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value)
     */
    rebuild?: boolean;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_protection
 */
export type change_server_protection_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_type
 */
export type change_type_of_load_balancer_request = {
    /**
     * ID or name of Load Balancer type the Load Balancer should migrate to
     */
    load_balancer_type: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_type
 */
export type change_type_of_load_balancer_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_type
 */
export type change_type_of_server_request = {
    /**
     * ID or name of Server type the Server should migrate to
     */
    server_type: string;
    /**
     * If false, do not upgrade the disk (this allows downgrading the Server type later)
     */
    upgrade_disk: boolean;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_type
 */
export type change_type_of_server_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/volumes/{id}/actions/change_protection
 */
export type change_volume_protection_request = {
    /**
     * If true, prevents the Volume from being deleted
     */
    delete?: boolean;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/change_protection
 */
export type change_volume_protection_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/certificates
 */
export type create_certificate_request = {
    /**
     * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates.
     */
    certificate?: string;
    /**
     * Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed` Certificates.
     */
    domain_names?: Array<(string)>;
    labels?: labels;
    /**
     * Name of the Certificate
     */
    name: string;
    /**
     * Certificate key in PEM format. Required for type `uploaded` Certificates.
     */
    private_key?: string;
    /**
     * Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate.
     */
    type?: 'managed' | 'uploaded';
};
/**
 * Response to POST https://api.hetzner.cloud/v1/certificates
 */
export type create_certificate_response = {
    action?: action_optional;
    certificate: certificate;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/firewalls
 */
export type create_firewall_request = {
    /**
     * Resources the Firewall should be applied to after creation
     */
    apply_to?: Array<firewall_resource>;
    labels?: labels;
    /**
     * Name of the Firewall.
     *
     * Limited to a maximum of 128 characters.
     *
     */
    name: string;
    /**
     * Array of rules.
     *
     * Limited to a maximum of 50 rules per Firewall.
     *
     */
    rules?: Array<rule>;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/firewalls
 */
export type create_firewall_response = {
    actions?: Array<action>;
    firewall?: firewall;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/floating_ips
 */
export type create_floating_ip_request = {
    /**
     * Description of the Resource.
     */
    description?: (string) | null;
    /**
     * Home [Location](#locations) for the [Floating IP](#floating-ips).
     *
     * Either the ID or the name of the [Location](#locations).
     *
     * Only optional if no [Server](#servers) is provided. Routing is optimized for this [Locations](#locations).
     *
     */
    home_location?: string;
    labels?: labels;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name?: string;
    /**
     * [Server](#servers) the [Floating IP](#floating-ips) is assigned to.
     *
     * `null` if not assigned.
     *
     */
    server?: (number) | null;
    type: ip_type;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/floating_ips
 */
export type create_floating_ip_response = {
    action?: action;
    floating_ip: floating_ip;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/create_image
 */
export type create_image_from_server_request = {
    /**
     * Description of the Image, will be auto-generated if not set
     */
    description?: string;
    labels?: labels;
    /**
     * Type of Image to create.
     */
    type?: 'backup' | 'snapshot';
};
/**
 * Type of Image to create.
 */
export type type3 = 'backup' | 'snapshot';
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/create_image
 */
export type create_image_from_server_response = {
    action?: action;
    image?: image;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/load_balancers
 */
export type create_load_balancer_request = {
    algorithm?: load_balancer_algorithm;
    labels?: labels;
    /**
     * ID or name of the Load Balancer type this Load Balancer should be created with
     */
    load_balancer_type: string;
    /**
     * ID or name of Location to create Load Balancer in
     */
    location?: string;
    /**
     * Name of the Load Balancer
     */
    name: string;
    /**
     * ID of the network the Load Balancer should be attached to on creation
     */
    network?: number;
    /**
     * Name of network zone
     */
    network_zone?: string;
    /**
     * Enable or disable the public interface of the Load Balancer
     */
    public_interface?: boolean;
    /**
     * Array of services
     */
    services?: Array<load_balancer_service>;
    /**
     * Array of targets
     */
    targets?: Array<target>;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers
 */
export type create_load_balancer_response = {
    action: action;
    load_balancer: load_balancer;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/networks
 */
export type create_network_request = {
    /**
     * Toggle to expose routes to the networks vSwitch.
     *
     * Indicates if the routes from this network should be exposed to the vSwitch in this network. Only takes effect if a vSwitch is setup in this network.
     *
     */
    expose_routes_to_vswitch?: boolean;
    /**
     * IP range in CIDR block notation of the whole network.
     *
     * Must span all included subnets. Must be one of the private IPv4 ranges of RFC1918.
     *
     * Minimum network size is /24. We highly recommend that you pick a larger network with a /16 netmask.
     *
     */
    ip_range: string;
    labels?: labels;
    /**
     * Name of the network
     */
    name: string;
    /**
     * Array of routes set in this network.
     */
    routes?: Array<route>;
    /**
     * Array of subnets allocated.
     */
    subnets?: Array<subnet>;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/networks
 */
export type create_network_response = {
    network?: network;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/placement_groups
 */
export type create_placementgroup_request = {
    labels?: labels;
    /**
     * Name of the PlacementGroup
     */
    name: string;
    /**
     * Define the Placement Group Type.
     */
    type: 'spread';
};
/**
 * Define the Placement Group Type.
 */
export type type4 = 'spread';
/**
 * Response to POST https://api.hetzner.cloud/v1/placement_groups
 */
export type create_placementgroup_response = {
    action?: action_optional;
    placement_group: {
        /**
         * Point in time when the Resource was created (in ISO-8601 format).
         */
        created: string;
        /**
         * ID of the Placement Group.
         */
        id: number;
        labels: labels;
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        /**
         * Array of IDs of Servers that are part of this Placement Group
         */
        servers: Array<(number)>;
        /**
         * Type of the Placement Group
         */
        type: 'spread';
    };
};
/**
 * Request for POST https://api.hetzner.cloud/v1/primary_ips
 */
export type create_primary_ip_request = {
    /**
     * ID of the resource the Primary IP should be assigned to. Omitted if it should not be assigned.
     */
    assignee_id?: number;
    /**
     * Resource type the Primary IP can be assigned to
     */
    assignee_type: 'server';
    /**
     * Delete the Primary IP when the Server it is assigned to is deleted.
     */
    auto_delete?: boolean;
    /**
     * ID or name of Datacenter the Primary IP will be bound to. Needs to be omitted if `assignee_id` is passed.
     */
    datacenter?: string;
    labels?: labels;
    name: string;
    type: ip_type;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/primary_ips
 */
export type create_primary_ip_response = {
    action?: action;
    primary_ip: {
        /**
         * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
         */
        assignee_id: (number) | null;
        /**
         * Resource type the Primary IP can be assigned to
         */
        assignee_type: 'server';
        /**
         * Delete this Primary IP when the resource it is assigned to is deleted
         */
        auto_delete: boolean;
        /**
         * Whether the IP is blocked
         */
        blocked: boolean;
        /**
         * Point in time when the Resource was created (in ISO-8601 format).
         */
        created: string;
        datacenter: datacenter;
        /**
         * Array of reverse DNS entries
         */
        dns_ptr: Array<dns_ptr>;
        /**
         * ID of the Primary IP.
         */
        id: number;
        /**
         * IP address.
         */
        ip: string;
        labels: labels;
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        protection: protection;
        type: ip_type;
    };
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers
 */
export type create_server_request = {
    /**
     * Auto-mount Volumes after attach
     */
    automount?: boolean;
    /**
     * ID or name of Datacenter to create Server in (must not be used together with location)
     */
    datacenter?: string;
    /**
     * Firewalls which should be applied on the Server's public network interface at creation time
     */
    firewalls?: Array<{
        /**
         * ID of the Firewall
         */
        firewall: number;
    }>;
    /**
     * ID or name of the Image the Server is created from
     */
    image: string;
    labels?: labels;
    /**
     * ID or name of Location to create Server in (must not be used together with datacenter)
     */
    location?: string;
    /**
     * Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)
     */
    name: string;
    /**
     * Network IDs which should be attached to the Server private network interface at the creation time
     */
    networks?: Array<(number)>;
    /**
     * ID of the Placement Group the server should be in
     */
    placement_group?: number;
    /**
     * Public Network options
     */
    public_net?: {
        /**
         * Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached.
         */
        enable_ipv4?: boolean;
        /**
         * Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached.
         */
        enable_ipv6?: boolean;
        /**
         * ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4 Primary IP will automatically be created.
         */
        ipv4?: (number) | null;
        /**
         * ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6 Primary IP will automatically be created.
         */
        ipv6?: (number) | null;
    };
    /**
     * ID or name of the Server type this Server should be created with
     */
    server_type: string;
    /**
     * SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time
     */
    ssh_keys?: Array<(string)>;
    /**
     * This automatically triggers a [Power on a Server-Server Action](#server-actions-power-on-a-server) after the creation is finished and is returned in the `next_actions` response object.
     */
    start_after_create?: boolean;
    /**
     * Cloud-Init user data to use during Server creation. This field is limited to 32KiB.
     */
    user_data?: string;
    /**
     * Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.
     */
    volumes?: Array<(number)>;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers
 */
export type create_server_response = {
    action: action;
    next_actions: Array<action>;
    /**
     * Root password when no SSH keys have been specified
     */
    root_password: (string) | null;
    server: server;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/ssh_keys
 */
export type create_ssh_key_request = {
    labels?: labels;
    /**
     * Name of the SSH key
     */
    name: string;
    /**
     * Public key
     */
    public_key: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/ssh_keys
 */
export type create_ssh_key_response = {
    ssh_key: ssh_key;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/volumes
 */
export type create_volume_request = {
    /**
     * Auto-mount Volume after attach. `server` must be provided.
     */
    automount?: boolean;
    /**
     * Format Volume after creation. One of: `xfs`, `ext4`
     */
    format?: string;
    labels?: labels;
    /**
     * Location to create the Volume in (can be omitted if Server is specified)
     */
    location?: string;
    /**
     * Name of the volume
     */
    name: string;
    /**
     * Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server)
     */
    server?: number;
    /**
     * Size of the Volume in GB
     */
    size: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/volumes
 */
export type create_volume_response = {
    action: action;
    next_actions: Array<action>;
    volume: volume;
};
/**
 * Information about the Server the Image was created from
 */
export type created_from = {
    /**
     * ID of the Server the Image was created from
     */
    id: number;
    /**
     * Server name at the time the Image was created
     */
    name: string;
} | null;
/**
 * Datacenter this Primary IP is located at | Datacenter this Resource is located at
 */
export type datacenter = {
    /**
     * Descriptive name for the [Datacenter](#datacenters).
     *
     * Desired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.
     *
     */
    description: string;
    /**
     * ID of the Datacenter.
     */
    id: number;
    location: location;
    /**
     * Unique name for the [Datacenter](#datacenters).
     *
     * Can be used as a more descriptive identifier.
     *
     */
    name: string;
    /**
     * [Server Types](#server-types) supported and available in this [Datacenter](#datacenters).
     *
     */
    server_types: {
        /**
         * [Server Types](#server-types) currently available in this [Datacenter](#datacenters).
         *
         * These [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable
         * but are supported in this [Datacenter](#datacenters) are listed as `supported`.
         *
         */
        available: Array<(number)>;
        /**
         * [Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).
         *
         * Existing [Servers](#servers) can be migrated to these [Server Types](#server-types).
         *
         */
        available_for_migration: Array<(number)>;
        /**
         * List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).
         *
         * These [Server Types](#server-types) are generally available in this Datacenter, but might be
         * temporarily out of stock.
         *
         */
        supported: Array<(number)>;
    };
};
export type delete_route_from_network_request = route;
/**
 * Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_route
 */
export type delete_route_from_network_response = {
    action: action;
};
/**
 * Response to DELETE https://api.hetzner.cloud/v1/servers/{id}
 */
export type delete_server_response = {
    action?: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/delete_service
 */
export type delete_service_request = {
    /**
     * The listen port of the service you want to delete
     */
    listen_port: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/delete_service
 */
export type delete_service_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_subnet
 */
export type delete_subnet_from_network_request = {
    /**
     * IP range in CIDR block notation of the Subnet to delete.
     */
    ip_range: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_subnet
 */
export type delete_subnet_from_network_response = {
    action: action;
};
/**
 * Describes if, when and how the resource is deprecated. If this field is
 * set to `null` the resource is not deprecated. If a value is set, it is
 * considered deprecated.
 *
 */
export type deprecation_info = {
    /**
     * Date of the deprecation announcement.
     *
     */
    announced: string;
    /**
     * Date of the deprecated resource removal.
     *
     * Once this date is reached, the resource will not be returned
     * by resource type "list" endpoint, and the resource can not be
     * used to create new resources. For example, if this is an
     * image, you can not create new servers with this image after
     * the mentioned date.
     *
     */
    unavailable_after: string;
} | null;
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/detach_iso
 */
export type detach_iso_from_server_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/detach_from_network
 */
export type detach_load_balancer_from_network_request = {
    /**
     * ID of an existing network to detach the Load Balancer from
     */
    network: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/detach_from_network
 */
export type detach_load_balancer_from_network_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/detach_from_network
 */
export type detach_server_from_network_request = {
    /**
     * ID of an existing network to detach the Server from
     */
    network: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/detach_from_network
 */
export type detach_server_from_network_response = {
    action: action;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/detach
 */
export type detach_volume_response = {
    action: action;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/disable_backup
 */
export type disable_backups_for_server_response = {
    action: action;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/disable_public_interface
 */
export type disable_public_interface_of_load_balancer_response = {
    action: action;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/disable_rescue
 */
export type disable_rescue_mode_for_server_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/change_dns_ptr
 */
export type dns_ptr = {
    /**
     * Domain Name to point to.
     *
     * PTR record content used for reverse DNS.
     * | DNS pointer for the specific IP address
     */
    dns_ptr: string;
    /**
     * Single IPv4 or IPv6 address to create pointer for.
     * | Single IPv4 or IPv6 address | Single IPv6 address of this Server for which the reverse DNS entry has been set up
     */
    ip: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/enable_backup
 */
export type enable_and_configure_backups_for_server_response = {
    action: action;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/enable_public_interface
 */
export type enable_public_interface_of_load_balancer_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/enable_rescue
 */
export type enable_rescue_mode_for_server_request = {
    /**
     * Array of SSH key IDs which should be injected into the rescue system.
     */
    ssh_keys?: Array<(number)>;
    /**
     * Type of rescue system to boot.
     */
    type?: 'linux64';
};
/**
 * Type of rescue system to boot.
 */
export type type5 = 'linux64';
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/enable_rescue
 */
export type enable_rescue_mode_for_server_response = {
    action?: action;
    /**
     * Password that will be set for this Server once the Action succeeds
     */
    root_password?: string;
};
/**
 * Error message for the Action if an error occurred, otherwise null.
 */
export type error = {
    /**
     * Fixed error code for machines.
     */
    code: string;
    /**
     * Error message for humans.
     */
    message: string;
} | null;
/**
 * Firewalls can limit the network access to or from your resources.
 */
export type firewall = {
    applied_to: Array<firewall_resource_id>;
    /**
     * Point in time when the Resource was created (in ISO-8601 format).
     */
    created: string;
    /**
     * ID of the Firewall.
     */
    id: number;
    labels?: labels;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    rules: Array<{
        /**
         * Description of the Rule
         */
        description?: (string) | null;
        /**
         * List of permitted IPv4/IPv6 addresses for outgoing traffic (`direction` set to `out`)
         * in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
         * blocks at most.
         *
         * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
         * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
         * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
         * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
         *
         */
        destination_ips: Array<(string)>;
        /**
         * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
         */
        direction: 'in' | 'out';
        /**
         * Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.
         */
        port: (string) | null;
        /**
         * Type of traffic to allow
         */
        protocol: 'esp' | 'gre' | 'icmp' | 'tcp' | 'udp';
        /**
         * List of permitted IPv4/IPv6 addresses for incoming traffic (`direction` set to `in`)
         * in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
         * blocks at most.
         *
         * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
         * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
         * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
         * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
         *
         */
        source_ips: Array<(string)>;
    }>;
};
/**
 * Resource a Firewall should be applied to.
 */
export type firewall_resource = {
    label_selector?: label_selector;
    server?: resource_id;
    /**
     * Type of the resource
     */
    type: 'label_selector' | 'server';
};
/**
 * Type of the resource
 */
export type type6 = 'label_selector' | 'server';
/**
 * Resource a Firewall should be applied to.
 */
export type firewall_resource_id = {
    applied_to_resources?: Array<{
        server?: resource_id;
        /**
         * Type of resource referenced
         */
        type?: 'server';
    }>;
    label_selector?: label_selector;
    server?: resource_id;
    /**
     * Type of resource referenced
     */
    type: 'label_selector' | 'server';
};
export type floating_ip = {
    /**
     * Indicates whether the [Floating IP](#floating-ips) is blocked.
     */
    blocked: boolean;
    /**
     * Point in time when the Resource was created (in ISO-8601 format).
     */
    created: string;
    /**
     * Description of the Resource.
     */
    description: (string) | null;
    /**
     * List of reverse DNS entries for the [Floating IP](#floating-ips)
     *
     */
    dns_ptr: Array<dns_ptr>;
    home_location: location;
    /**
     * ID of the Floating IP.
     */
    id: number;
    /**
     * IP address.
     */
    ip: string;
    labels: labels;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    protection: protection;
    /**
     * [Server](#servers) the [Floating IP](#floating-ips) is assigned to.
     *
     * `null` if not assigned.
     *
     */
    server: (number) | null;
    type: ip_type;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/certificates/{id}/actions/{action_id}
 */
export type get_action_for_certificate_response = {
    action: action;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/firewalls/{id}/actions/{action_id}
 */
export type get_action_for_firewall_response = {
    action: action;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/floating_ips/{id}/actions/{action_id}
 */
export type get_action_for_floating_ip_response = {
    action: action;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/images/{id}/actions/{action_id}
 */
export type get_action_for_image_response = {
    action: action;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/load_balancers/{id}/actions/{action_id}
 */
export type get_action_for_load_balancer_response = {
    action: action;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/networks/{id}/actions/{action_id}
 */
export type get_action_for_network_response = {
    action: action;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/servers/{id}/actions/{action_id}
 */
export type get_action_for_server_response = {
    action: action;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/volumes/{id}/actions/{action_id}
 */
export type get_action_for_volume_response = {
    action: action;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/{resource}/actions
 */
export type get_action_response = {
    action: action;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/certificates/{id}
 */
export type get_certificate_response = {
    certificate: certificate;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/datacenters/{id}
 */
export type get_datacenter_response = {
    datacenter: datacenter;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/firewalls/{id}
 */
export type get_firewall_response = {
    firewall: firewall;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/floating_ips/{id}
 */
export type get_floating_ip_response = {
    floating_ip: floating_ip;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/images/{id}
 */
export type get_image_response = {
    image?: image;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/isos/{id}
 */
export type get_iso_response = {
    iso: iso;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/load_balancers/{id}
 */
export type get_load_balancer_response = {
    load_balancer: load_balancer;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/load_balancer_types/{id}
 */
export type get_load_balancer_type_response = {
    load_balancer_type?: load_balancer_type;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/locations/{id}
 */
export type get_location_response = {
    location: location;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/load_balancers/{id}/metrics
 */
export type get_metrics_for_loadbalancer_response = {
    metrics: metrics;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/servers/{id}/metrics
 */
export type get_metrics_for_server_response = {
    metrics: metrics;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/networks/{id}
 */
export type get_network_response = {
    network?: network;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/placement_groups/{id}
 */
export type get_placementgroup_response = {
    placement_group: {
        /**
         * Point in time when the Resource was created (in ISO-8601 format).
         */
        created: string;
        /**
         * ID of the Placement Group.
         */
        id: number;
        labels: labels;
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        /**
         * Array of IDs of Servers that are part of this Placement Group
         */
        servers: Array<(number)>;
        /**
         * Type of the Placement Group
         */
        type: 'spread';
    };
};
/**
 * Response to GET https://api.hetzner.cloud/v1/primary_ips/{id}
 */
export type get_primary_ip_response = {
    primary_ip: {
        /**
         * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
         */
        assignee_id: (number) | null;
        /**
         * Resource type the Primary IP can be assigned to
         */
        assignee_type: 'server';
        /**
         * Delete this Primary IP when the resource it is assigned to is deleted
         */
        auto_delete: boolean;
        /**
         * Whether the IP is blocked
         */
        blocked: boolean;
        /**
         * Point in time when the Resource was created (in ISO-8601 format).
         */
        created: string;
        datacenter: datacenter;
        /**
         * Array of reverse DNS entries
         */
        dns_ptr: Array<dns_ptr>;
        /**
         * ID of the Primary IP.
         */
        id: number;
        /**
         * IP address.
         */
        ip: string;
        labels: labels;
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        protection: protection;
        type: ip_type;
    };
};
/**
 * Response to GET https://api.hetzner.cloud/v1/servers/{id}
 */
export type get_server_response = {
    server?: server;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/server_types/{id}
 */
export type get_server_type_response = {
    server_type: server_type;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/ssh_keys/{id}
 */
export type get_ssh_key_response = {
    ssh_key: ssh_key;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/volumes/{id}
 */
export type get_volume_response = {
    volume: volume;
};
export type health_status = {
    listen_port?: number;
    status?: 'healthy' | 'unhealthy' | 'unknown';
};
export type status2 = 'healthy' | 'unhealthy' | 'unknown';
/**
 * Configuration option for protocols http and https
 */
export type http = {
    /**
     * IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is `http`.
     */
    certificates?: Array<(number)>;
    /**
     * Lifetime of the cookie used for sticky sessions (in seconds).
     */
    cookie_lifetime?: number;
    /**
     * Name of the cookie used for sticky sessions.
     */
    cookie_name?: string;
    /**
     * Redirect HTTP requests to HTTPS. Only available if `protocol` is `https`.
     */
    redirect_http?: boolean;
    /**
     * Use sticky sessions. Only available if `protocol` is `http` or `https`.
     */
    sticky_sessions?: boolean;
};
export type image = {
    architecture: architecture;
    /**
     * ID of Server the Image is bound to. Only set for Images of type `backup`.
     */
    bound_to: (number) | null;
    /**
     * Point in time when the Resource was created (in ISO-8601 format).
     */
    created: string;
    created_from: created_from;
    /**
     * Point in time where the Image was deleted (in ISO-8601 format)
     */
    deleted: (string) | null;
    /**
     * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
     */
    deprecated: (string) | null;
    /**
     * Description of the Image
     */
    description: string;
    /**
     * Size of the disk contained in the Image in GB
     */
    disk_size: number;
    /**
     * ID of the Image.
     */
    id: number;
    /**
     * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
     */
    image_size: (number) | null;
    labels: labels;
    /**
     * Unique identifier of the Image. This value is only set for system Images.
     */
    name: (string) | null;
    /**
     * Flavor of operating system contained in the Image
     */
    os_flavor: 'alma' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'ubuntu' | 'unknown';
    /**
     * Operating system version
     */
    os_version: (string) | null;
    protection: protection;
    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapid_deploy?: boolean;
    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: 'available' | 'creating' | 'unavailable';
    /**
     * Type of the Image
     */
    type: 'app' | 'backup' | 'snapshot' | 'system' | 'temporary';
};
/**
 * Flavor of operating system contained in the Image
 */
export type os_flavor = 'alma' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'ubuntu' | 'unknown';
/**
 * Whether the Image can be used or if it's still being created or unavailable
 */
export type status3 = 'available' | 'creating' | 'unavailable';
/**
 * Type of the Image
 */
export type type7 = 'app' | 'backup' | 'snapshot' | 'system' | 'temporary';
/**
 * Image the server is based on.
 */
export type image_optional = {
    architecture: architecture;
    /**
     * ID of Server the Image is bound to. Only set for Images of type `backup`.
     */
    bound_to: (number) | null;
    /**
     * Point in time when the Resource was created (in ISO-8601 format).
     */
    created: string;
    created_from: created_from;
    /**
     * Point in time where the Image was deleted (in ISO-8601 format)
     */
    deleted: (string) | null;
    /**
     * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
     */
    deprecated: (string) | null;
    /**
     * Description of the Image
     */
    description: string;
    /**
     * Size of the disk contained in the Image in GB
     */
    disk_size: number;
    /**
     * ID of the Image.
     */
    id: number;
    /**
     * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
     */
    image_size: (number) | null;
    labels: labels;
    /**
     * Unique identifier of the Image. This value is only set for system Images.
     */
    name: (string) | null;
    /**
     * Flavor of operating system contained in the Image
     */
    os_flavor: 'alma' | 'centos' | 'debian' | 'fedora' | 'rocky' | 'ubuntu' | 'unknown';
    /**
     * Operating system version
     */
    os_version: (string) | null;
    protection: protection;
    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapid_deploy?: boolean;
    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: 'available' | 'creating' | 'unavailable';
    /**
     * Type of the Image
     */
    type: 'app' | 'backup' | 'snapshot' | 'system' | 'temporary';
} | null;
/**
 * The type of the IP
 */
export type ip_type = 'ipv4' | 'ipv6';
/**
 * IP address (v4) and its reverse DNS entry of this Server
 */
export type ipv4 = {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean;
    /**
     * Reverse DNS PTR entry for the IPv4 addresses of this Server
     */
    dns_ptr: string;
    /**
     * ID of the Primary IP.
     */
    id?: number;
    /**
     * IP address (v4) of this Server
     */
    ip: string;
} | null;
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
 */
export type ipv6 = {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean;
    /**
     * Reverse DNS PTR entries for the IPv6 addresses of this Server
     */
    dns_ptr: Array<dns_ptr> | null;
    /**
     * ID of the Primary IP.
     */
    id?: number;
    /**
     * IP address (v6) of this Server
     */
    ip: string;
} | null;
export type iso = {
    architecture: architecture_optional;
    deprecation: deprecation_info;
    /**
     * Description of the ISO
     */
    description: string;
    /**
     * ID of the ISO.
     */
    id: number;
    /**
     * Unique identifier of the ISO. Only set for public ISOs
     */
    name: (string) | null;
    /**
     * Type of the ISO
     */
    type: ('private' | 'public') | null;
};
/**
 * Type of the ISO
 */
export type type8 = 'private' | 'public';
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
 */
export type iso_optional = {
    architecture: architecture_optional;
    deprecation: deprecation_info;
    /**
     * Description of the ISO
     */
    description: string;
    /**
     * ID of the ISO.
     */
    id: number;
    /**
     * Unique identifier of the ISO. Only set for public ISOs
     */
    name: (string) | null;
    /**
     * Type of the ISO
     */
    type: ('private' | 'public') | null;
} | null;
/**
 * Configuration for type LabelSelector, required if type is `label_selector`
 */
export type label_selector = {
    /**
     * Label selector
     */
    selector: string;
};
/**
 * User-defined labels (`key/value` pairs) for the Resource.
 * For more information, see "[Labels](#labels)".
 *
 */
export type labels = {
    [key: string]: (string);
};
/**
 * Response to GET https://api.hetzner.cloud/v1/certificates/{id}/actions
 */
export type list_actions_for_certificate_response = {
    actions: Array<action>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/firewalls/{id}/actions
 */
export type list_actions_for_firewall_response = {
    actions: Array<action>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/floating_ips/{id}/actions
 */
export type list_actions_for_floating_ip_response = {
    actions: Array<action>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/images/{id}/actions
 */
export type list_actions_for_image_response = {
    actions: Array<action>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/load_balancers/{id}/actions
 */
export type list_actions_for_load_balancer_response = {
    actions: Array<action>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/networks/{id}/actions
 */
export type list_actions_for_network_response = {
    actions: Array<action>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/servers/{id}/actions
 */
export type list_actions_for_server_response = {
    actions: Array<action>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/volumes/{id}/actions
 */
export type list_actions_for_volume_response = {
    actions: Array<action>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/{resource}/actions/{id}
 */
export type list_actions_response = {
    actions: Array<action>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/certificates
 */
export type list_certificates_response = {
    certificates: Array<certificate>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/datacenters
 */
export type list_datacenters_response = {
    /**
     * List of [Datacenters](#datacenters).
     */
    datacenters: Array<datacenter>;
    meta: meta;
    /**
     * Recommended [Datacenter](#datacenters) for creating new resources.
     */
    recommendation: number;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/firewalls
 */
export type list_firewalls_response = {
    firewalls: Array<firewall>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/floating_ips
 */
export type list_floating_ips_response = {
    floating_ips: Array<floating_ip>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/images
 */
export type list_images_response = {
    images: Array<image>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/isos
 */
export type list_isos_response = {
    isos: Array<iso>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/load_balancer_types
 */
export type list_load_balancer_types_response = {
    load_balancer_types: Array<load_balancer_type>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/load_balancers
 */
export type list_load_balancers_response = {
    load_balancers: Array<load_balancer>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/locations
 */
export type list_locations_response = {
    /**
     * List of Locations.
     */
    locations: Array<location>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/networks
 */
export type list_networks_response = {
    meta: meta;
    networks: Array<network>;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/placement_groups
 */
export type list_placementgroups_response = {
    meta: meta;
    placement_groups: Array<{
        /**
         * Point in time when the Resource was created (in ISO-8601 format).
         */
        created: string;
        /**
         * ID of the Placement Group.
         */
        id: number;
        labels: labels;
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        /**
         * Array of IDs of Servers that are part of this Placement Group
         */
        servers: Array<(number)>;
        /**
         * Type of the Placement Group
         */
        type: 'spread';
    }>;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/pricing
 */
export type list_prices_response = {
    pricing: {
        /**
         * Currency the returned prices are expressed in, coded according to ISO 4217
         */
        currency: string;
        /**
         * The cost of one Floating IP per month
         */
        floating_ip: {
            price_monthly: price;
        };
        /**
         * Costs of Floating IPs types per Location and type
         */
        floating_ips: Array<{
            /**
             * Floating IP type costs per Location
             */
            prices: Array<price_per_time_monthly>;
            type: ip_type;
        }>;
        /**
         * The cost of Image per GB/month
         */
        image: {
            price_per_gb_month: price;
        };
        /**
         * Costs of Load Balancer types per Location and type
         */
        load_balancer_types: Array<{
            /**
             * ID of the Load Balancer type the price is for
             */
            id: number;
            /**
             * Name of the Load Balancer type the price is for
             */
            name: string;
            /**
             * Load Balancer type costs per Location
             */
            prices: Array<price_per_time>;
        }>;
        /**
         * Costs of Primary IPs types per Location
         */
        primary_ips: Array<{
            /**
             * Primary IP type costs per Location
             */
            prices: Array<price_per_time_without_traffic>;
            type: ip_type;
        }>;
        /**
         * Will increase base Server costs by specific percentage
         */
        server_backup: {
            /**
             * Percentage by how much the base price will increase
             */
            percentage: string;
        };
        /**
         * Costs of Server types per Location and type
         */
        server_types: Array<{
            /**
             * ID of the Server type the price is for
             */
            id: number;
            /**
             * Name of the Server type the price is for
             */
            name: string;
            /**
             * Server type costs per Location
             */
            prices: Array<price_per_time>;
        }>;
        /**
         * **Deprecated**: This field is deprecated and set to `null` since 5 August 2024.
         * Please refer to the `price_per_tb_traffic` fields in `server_types` and `load_balancer_types` instead.
         *
         * Learn more about this change in [the Changelog](https://docs.hetzner.cloud/changelog#2024-07-25-cloud-api-returns-traffic-information-in-different-format).
         *
         * @deprecated
         */
        traffic: {
            [key: string]: unknown;
        } | null;
        /**
         * The VAT rate used for calculating prices with VAT
         */
        vat_rate: string;
        /**
         * The cost of Volume per GB/month
         */
        volume: {
            price_per_gb_month: price;
        };
    };
};
/**
 * Response to GET https://api.hetzner.cloud/v1/primary_ips
 */
export type list_primary_ips_response = {
    meta: meta;
    primary_ips: Array<{
        /**
         * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
         */
        assignee_id: (number) | null;
        /**
         * Resource type the Primary IP can be assigned to
         */
        assignee_type: 'server';
        /**
         * Delete this Primary IP when the resource it is assigned to is deleted
         */
        auto_delete: boolean;
        /**
         * Whether the IP is blocked
         */
        blocked: boolean;
        /**
         * Point in time when the Resource was created (in ISO-8601 format).
         */
        created: string;
        datacenter: datacenter;
        /**
         * Array of reverse DNS entries
         */
        dns_ptr: Array<dns_ptr>;
        /**
         * ID of the Primary IP.
         */
        id: number;
        /**
         * IP address.
         */
        ip: string;
        labels: labels;
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        protection: protection;
        type: ip_type;
    }>;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/server_types
 */
export type list_server_types_response = {
    server_types: Array<server_type>;
    meta: meta;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/servers
 */
export type list_servers_response = {
    meta: meta;
    servers: Array<server>;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/ssh_keys
 */
export type list_ssh_keys_response = {
    meta: meta;
    ssh_keys: Array<ssh_key>;
};
/**
 * Response to GET https://api.hetzner.cloud/v1/volumes
 */
export type list_volumes_response = {
    meta: meta;
    volumes: Array<volume>;
};
export type load_balancer = {
    algorithm: load_balancer_algorithm;
    /**
     * Point in time when the Resource was created (in ISO-8601 format).
     */
    created: string;
    /**
     * ID of the Load Balancer.
     */
    id: number;
    /**
     * Free Traffic for the current billing period in bytes
     */
    included_traffic: number;
    /**
     * Inbound Traffic for the current billing period in bytes
     */
    ingoing_traffic: (number) | null;
    labels: labels;
    load_balancer_type: load_balancer_type;
    location: location;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Outbound Traffic for the current billing period in bytes
     */
    outgoing_traffic: (number) | null;
    /**
     * Private networks information
     */
    private_net: Array<load_balancer_private_net>;
    protection: protection;
    public_net: load_balancer_public_net;
    /**
     * List of services that belong to this Load Balancer
     */
    services: Array<load_balancer_service>;
    /**
     * List of targets that belong to this Load Balancer
     */
    targets: Array<target>;
};
/**
 * Algorithm of the Load Balancer
 */
export type load_balancer_algorithm = {
    /**
     * Type of the algorithm.
     */
    type: 'least_connections' | 'round_robin';
};
/**
 * Type of the algorithm.
 */
export type type9 = 'least_connections' | 'round_robin';
export type load_balancer_private_net = {
    /**
     * IP address (v4) of this Load Balancer in this Network
     */
    ip?: string;
    /**
     * ID of the Network
     */
    network?: number;
};
/**
 * Public network information
 */
export type load_balancer_public_net = {
    /**
     * Public Interface enabled or not
     */
    enabled: boolean;
    /**
     * IP address (v4)
     */
    ipv4: {
        /**
         * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
         */
        dns_ptr?: (string) | null;
        /**
         * IP address (v4) of this Load Balancer
         */
        ip?: (string) | null;
    };
    /**
     * IP address (v6)
     */
    ipv6: {
        /**
         * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
         */
        dns_ptr?: (string) | null;
        /**
         * IP address (v6) of this Load Balancer
         */
        ip?: (string) | null;
    };
};
/**
 * A service for a Load Balancer.
 */
export type load_balancer_service = {
    /**
     * Port the Load Balancer will balance to
     */
    destination_port: number;
    /**
     * Service health check
     */
    health_check: {
        /**
         * Additional configuration for protocol http
         */
        http?: {
            /**
             * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
             */
            domain: (string) | null;
            /**
             * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
             */
            path: string;
            /**
             * String that must be contained in HTTP response in order to pass the health check
             */
            response?: string;
            /**
             * List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones.
             */
            status_codes?: Array<(string)>;
            /**
             * Use HTTPS for health check
             */
            tls?: boolean;
        };
        /**
         * Time interval in seconds health checks are performed
         */
        interval: number;
        /**
         * Port the health check will be performed on
         */
        port: number;
        /**
         * Type of the health check
         */
        protocol: 'http' | 'tcp';
        /**
         * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
         */
        retries: number;
        /**
         * Time in seconds after an attempt is considered a timeout
         */
        timeout: number;
    };
    http?: http;
    /**
     * Port the Load Balancer listens on
     */
    listen_port: number;
    /**
     * Protocol of the Load Balancer
     */
    protocol: 'http' | 'https' | 'tcp';
    /**
     * Is Proxyprotocol enabled or not
     */
    proxyprotocol: boolean;
};
/**
 * Type of the health check
 */
export type protocol = 'http' | 'tcp';
export type load_balancer_type = {
    /**
     * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
     */
    deprecated: (string) | null;
    /**
     * Description of the Load Balancer type
     */
    description: string;
    /**
     * ID of the Load Balancer type
     */
    id: number;
    /**
     * Number of SSL Certificates that can be assigned to a single Load Balancer
     */
    max_assigned_certificates: number;
    /**
     * Number of maximum simultaneous open connections
     */
    max_connections: number;
    /**
     * Number of services a Load Balancer of this type can have
     */
    max_services: number;
    /**
     * Number of targets a single Load Balancer can have
     */
    max_targets: number;
    /**
     * Unique identifier of the Load Balancer type
     */
    name: string;
    /**
     * Prices in different network zones
     */
    prices: Array<price_per_time>;
};
/**
 * [Location](#locations) the [Datacenter](#datacenters) is located at.
 * | [Location](#locations) the for the [Floating IP](#floating-ips) is located at.
 *
 * Routing is optimized for this [Location](#locations).
 * | Location of the Volume. Volume can only be attached to Servers in the same Location.
 */
export type location = {
    /**
     * Name of the closest city to the Location.
     *
     * City name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.
     *
     */
    city: string;
    /**
     * Country the Location resides in.
     *
     * ISO 3166-1 alpha-2 code of the country.
     *
     */
    country: string;
    /**
     * Humand readable description of the Location.
     */
    description: string;
    /**
     * ID of the Location.
     */
    id: number;
    /**
     * Latitude of the city closest to the Location.
     */
    latitude: number;
    /**
     * Longitude of the city closest to the Location.
     */
    longitude: number;
    /**
     * Unique identifier of the Location.
     */
    name: string;
    /**
     * Name of the Network Zone this Location resides in.
     */
    network_zone: string;
};
/**
 * Metadata contained in the response
 */
export type meta = {
    pagination: pagination;
};
/**
 * You must specify the type of metric to get: open_connections, requests_per_second or bandwidth. You can also specify more than one type by comma separation, e.g. requests_per_second,bandwidth. Depending on the type you will get different time series data.
 */
export type metrics = {
    /**
     * End of period of metrics reported (in ISO-8601 format)
     */
    end: string;
    /**
     * Start of period of metrics reported (in ISO-8601 format)
     */
    start: string;
    /**
     * Resolution of results in seconds.
     */
    step: number;
    /**
     * Hash with timeseries information, containing the name of timeseries as key
     */
    time_series: {
        [key: string]: {
            /**
             * Metrics Timestamps with values
             */
            values: Array<Array<(number | string)>>;
        };
    };
};
export type network = {
    /**
     * Point in time when the Network was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Indicates if the routes from this network should be exposed to the vSwitch connection.
     */
    expose_routes_to_vswitch: boolean;
    /**
     * ID of the Network
     */
    id: number;
    /**
     * IP range in CIDR block notation of the whole network.
     */
    ip_range: string;
    labels: labels;
    /**
     * Array of IDs of Load Balancers attached to this Network
     */
    load_balancers?: Array<(number)>;
    /**
     * Name of the Network
     */
    name: string;
    protection: protection;
    /**
     * Array of routes set in this Network
     */
    routes: Array<route>;
    /**
     * Array of IDs of Servers attached to this Network
     */
    servers: Array<(number)>;
    /**
     * Array subnets allocated in this Network
     */
    subnets: Array<subnet_with_gateway>;
};
/**
 * See "[Pagination](#pagination)" for more information. | Information about the current pagination. The keys previous_page, next_page, last_page, and total_entries may be null when on the first page, last page, or when the total number of entries is unknown
 */
export type pagination = {
    /**
     * Page number of the last page available. Can be null if the current page is the last one. | ID of the last page available. Can be null if the current page is the last one.
     */
    last_page: (number) | null;
    /**
     * Page number of the next page. Can be null if the current page is the last one. | ID of the next page. Can be null if the current page is the last one.
     */
    next_page: (number) | null;
    /**
     * Current page number. | Current page number
     */
    page: number;
    /**
     * Maximum number of entries returned per page. | Maximum number of items shown per page in the response
     */
    per_page: number;
    /**
     * Page number of the previous page. Can be null if the current page is the first one. | ID of the previous page. Can be null if the current page is the first one.
     */
    previous_page: (number) | null;
    /**
     * Total number of entries that exist for this query. Can be null if unknown. | The total number of entries that exist in the database for this query. Nullable if unknown.
     */
    total_entries: (number) | null;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/poweroff
 */
export type power_off_server_response = {
    action: action;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/poweron
 */
export type power_on_server_response = {
    action: action;
};
/**
 * Hourly costs for a Resource in this Location. | Monthly costs for a Resource in this Location. | The cost of additional traffic per TB. | Monthly costs for a Floating IP type in this Location | Hourly costs for a Load Balancer type in this network zone | Monthly costs for a Load Balancer type in this network zone | Hourly costs for a Primary IP type in this Location | Monthly costs for a Primary IP type in this Location | Hourly costs for a Server type in this Location | Monthly costs for a Server type in this Location
 */
export type price = {
    /**
     * Price with VAT added. | Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT. | Price without VAT
     */
    net: string;
};
export type price_per_time = {
    /**
     * Free traffic per month in bytes.
     */
    included_traffic: number;
    /**
     * Name of the Location the price is for. | Name of the Location the price is for
     */
    location: string;
    price_hourly: price;
    price_monthly: price;
    price_per_tb_traffic: price;
};
export type price_per_time_monthly = {
    /**
     * Name of the Location the price is for
     */
    location: string;
    price_monthly: price;
};
export type price_per_time_without_traffic = {
    /**
     * Name of the Location the price is for
     */
    location: string;
    price_hourly: price;
    price_monthly: price;
};
/**
 * Protection configuration for the Resource
 */
export type protection = {
    /**
     * Prevent the Resource from being deleted.
     */
    delete: boolean;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/rebuild
 */
export type rebuild_server_from_image_request = {
    /**
     * ID or name of Image to rebuilt from.
     */
    image: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/rebuild
 */
export type rebuild_server_from_image_response = {
    action?: action;
    /**
     * New root password when not using SSH keys
     */
    root_password?: (string) | null;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/remove_from_placement_group
 */
export type remove_from_placement_group_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/remove_from_resources
 */
export type remove_from_resources_request = {
    /**
     * Resources the Firewall should be removed from
     */
    remove_from: Array<firewall_resource>;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/remove_from_resources
 */
export type remove_from_resources_response = {
    actions: Array<action>;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/remove_target
 */
export type remove_target_request = {
    /**
     * IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip".
     */
    ip?: {
        /**
         * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
         */
        ip: string;
    };
    label_selector?: label_selector;
    /**
     * Configuration for type Server, required if type is `server`
     */
    server?: {
        /**
         * ID of the Server
         */
        id: number;
    };
    /**
     * Type of the resource
     */
    type: 'ip' | 'label_selector' | 'server';
};
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/remove_target
 */
export type remove_target_response = {
    action: action;
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/certificates/{id}
 */
export type replace_certificate_request = {
    labels?: labels;
    /**
     * New Certificate name
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/certificates/{id}
 */
export type replace_certificate_response = {
    certificate: certificate;
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/firewalls/{id}
 */
export type replace_firewall_request = {
    labels?: labels;
    /**
     * New Firewall name
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/firewalls/{id}
 */
export type replace_firewall_response = {
    firewall: firewall;
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/floating_ips/{id}
 */
export type replace_floating_ip_request = {
    /**
     * Description of the Resource.
     */
    description?: (string) | null;
    labels?: labels;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/floating_ips/{id}
 */
export type replace_floating_ip_response = {
    floating_ip: floating_ip;
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/images/{id}
 */
export type replace_image_request = {
    /**
     * New description of Image
     */
    description?: string;
    labels?: labels;
    /**
     * Destination Image type to convert to
     */
    type?: 'snapshot';
};
/**
 * Destination Image type to convert to
 */
export type type10 = 'snapshot';
/**
 * Response to PUT https://api.hetzner.cloud/v1/images/{id}
 */
export type replace_image_response = {
    image?: image;
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/load_balancers/{id}
 */
export type replace_load_balancer_request = {
    labels?: labels;
    /**
     * New Load Balancer name
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/load_balancers/{id}
 */
export type replace_load_balancer_response = {
    load_balancer: load_balancer;
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/networks/{id}
 */
export type replace_network_request = {
    /**
     * Toggle to expose routes to the networks vSwitch.
     *
     * Indicates if the routes from this network should be exposed to the vSwitch in this network. Only takes effect if a vSwitch is setup in this network.
     *
     */
    expose_routes_to_vswitch?: boolean;
    labels?: labels;
    /**
     * New network name
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/networks/{id}
 */
export type replace_network_response = {
    network?: network;
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/placement_groups/{id}
 */
export type replace_placementgroup_request = {
    labels?: labels;
    /**
     * New PlacementGroup name
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/placement_groups/{id}
 */
export type replace_placementgroup_response = {
    placement_group: {
        /**
         * Point in time when the Resource was created (in ISO-8601 format).
         */
        created: string;
        /**
         * ID of the Placement Group.
         */
        id: number;
        labels: labels;
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        /**
         * Array of IDs of Servers that are part of this Placement Group
         */
        servers: Array<(number)>;
        /**
         * Type of the Placement Group
         */
        type: 'spread';
    };
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/primary_ips/{id}
 */
export type replace_primary_ip_request = {
    /**
     * Delete this Primary IP when the resource it is assigned to is deleted
     */
    auto_delete?: boolean;
    labels?: labels;
    /**
     * New unique name to set
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/primary_ips/{id}
 */
export type replace_primary_ip_response = {
    primary_ip: {
        /**
         * ID of the resource the Primary IP is assigned to, null if it is not assigned at all
         */
        assignee_id: (number) | null;
        /**
         * Resource type the Primary IP can be assigned to
         */
        assignee_type: 'server';
        /**
         * Delete this Primary IP when the resource it is assigned to is deleted
         */
        auto_delete: boolean;
        /**
         * Whether the IP is blocked
         */
        blocked: boolean;
        /**
         * Point in time when the Resource was created (in ISO-8601 format).
         */
        created: string;
        datacenter: datacenter;
        /**
         * Array of reverse DNS entries
         */
        dns_ptr: Array<dns_ptr>;
        /**
         * ID of the Primary IP.
         */
        id: number;
        /**
         * IP address.
         */
        ip: string;
        labels: labels;
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        protection: protection;
        type: ip_type;
    };
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/servers/{id}
 */
export type replace_server_request = {
    labels?: labels;
    /**
     * New name to set
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/servers/{id}
 */
export type replace_server_response = {
    server?: server;
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/ssh_keys/{id}
 */
export type replace_ssh_key_request = {
    labels?: labels;
    /**
     * New name Name to set
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/ssh_keys/{id}
 */
export type replace_ssh_key_response = {
    ssh_key: ssh_key;
};
/**
 * Request for PUT https://api.hetzner.cloud/v1/volumes/{id}
 */
export type replace_volume_request = {
    labels?: labels;
    /**
     * New Volume name
     */
    name?: string;
};
/**
 * Response to PUT https://api.hetzner.cloud/v1/volumes/{id}
 */
export type replace_volume_response = {
    volume: volume;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/request_console
 */
export type request_console_for_server_response = {
    action: action;
    /**
     * VNC password to use for this connection (this password only works in combination with a wss_url with valid token)
     */
    password: string;
    /**
     * URL of websocket proxy to use; this includes a token which is valid for a limited time only
     */
    wss_url: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/reset_password
 */
export type reset_root_password_of_server_response = {
    action?: action;
    /**
     * Password that will be set for this Server once the Action succeeds
     */
    root_password?: string;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/reset
 */
export type reset_server_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/volumes/{id}/actions/resize
 */
export type resize_volume_request = {
    /**
     * New Volume size in GB (must be greater than current size)
     */
    size: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/resize
 */
export type resize_volume_response = {
    action: action;
};
export type resource = {
    /**
     * ID of the Resource. | ID of resource referenced
     */
    id: number;
    /**
     * Type of the Resource. | Type of resource referenced
     */
    type: string;
};
/**
 * ID of the Resource
 */
export type resource_id = {
    /**
     * ID of the Server. | ID of the Server
     */
    id: number;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/certificates/{id}/actions/retry
 */
export type retry_issuance_or_renewal_response = {
    action: action;
};
/**
 * Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_route | Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_route
 */
export type route = {
    /**
     * Destination network or host of the route.
     *
     * Packages addressed for IPs matching the destination IP prefix will be send to the specified gateway.
     *
     * Must be one of
     * * private IPv4 ranges of RFC1918
     * * or `0.0.0.0/0`.
     *
     * Must not overlap with
     * * an existing ip_range in any subnets
     * * or with any destinations in other routes
     * * or with `172.31.1.1`.
     *
     * `172.31.1.1` is being used as a gateway for the public network interface of Servers.
     *
     */
    destination: string;
    /**
     * Gateway of the route.
     *
     * Packages addressed for the specified destination will be send to this IP address.
     *
     * Cannot be
     * * the first IP of the networks ip_range,
     * * an IP behind a vSwitch or
     * * `172.31.1.1`.
     *
     * `172.31.1.1` is being used as a gateway for the public network interface of Servers.
     *
     */
    gateway: string;
};
/**
 * Rule of a firewall.
 */
export type rule = {
    /**
     * Description of the Rule
     */
    description?: (string) | null;
    /**
     * List of permitted IPv4/IPv6 addresses for outgoing traffic (`direction` set to `out`)
     * in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
     * blocks at most.
     *
     * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
     * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
     * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
     * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
     *
     */
    destination_ips?: Array<(string)>;
    /**
     * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
     */
    direction: 'in' | 'out';
    /**
     * Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.
     */
    port?: (string) | null;
    /**
     * Type of traffic to allow
     */
    protocol: 'esp' | 'gre' | 'icmp' | 'tcp' | 'udp';
    /**
     * List of permitted IPv4/IPv6 addresses for incoming traffic (`direction` set to `in`)
     * in [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR
     * blocks at most.
     *
     * The CIDR blocks may refer to networks (with empty host bits) or single hosts.
     * For example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,
     * and a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.
     * Use `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.
     *
     */
    source_ips?: Array<(string)>;
};
/**
 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
 */
export type direction = 'in' | 'out';
/**
 * Type of traffic to allow
 */
export type protocol2 = 'esp' | 'gre' | 'icmp' | 'tcp' | 'udp';
export type selected_target = {
    /**
     * List of health statuses of the services on this target. Only present for target types "server" and "ip".
     */
    health_status?: Array<health_status>;
    server?: resource_id;
    /**
     * Type of the resource. Here always "server".
     */
    type?: string;
    /**
     * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
     */
    use_private_ip?: boolean;
};
/**
 * Servers are virtual machines that can be provisioned.
 */
export type server = {
    /**
     * Time window (UTC) in which the backup will run, or null if the backups are not enabled
     */
    backup_window: (string) | null;
    /**
     * Point in time when the Resource was created (in ISO-8601 format).
     */
    created: string;
    datacenter: datacenter;
    /**
     * ID of the Server.
     */
    id: number;
    image: image_optional;
    /**
     * Free Traffic for the current billing period in bytes
     */
    included_traffic: (number) | null;
    /**
     * Inbound Traffic for the current billing period in bytes
     */
    ingoing_traffic: (number) | null;
    iso: iso_optional;
    labels: labels;
    /**
     * Load Balancer IDs assigned to the server.
     */
    load_balancers?: Array<(number)>;
    /**
     * True if Server has been locked and is not available to user
     */
    locked: boolean;
    /**
     * Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)
     */
    name: string;
    /**
     * Outbound Traffic for the current billing period in bytes
     */
    outgoing_traffic: (number) | null;
    /**
     * The placement group the server is assigned to.
     */
    placement_group?: {
        /**
         * Point in time when the Resource was created (in ISO-8601 format).
         */
        created: string;
        /**
         * ID of the Placement Group.
         */
        id: number;
        labels: labels;
        /**
         * Name of the Resource. Must be unique per Project.
         */
        name: string;
        /**
         * Array of IDs of Servers that are part of this Placement Group
         */
        servers: Array<(number)>;
        /**
         * Type of the Placement Group
         */
        type: 'spread';
    } | null;
    /**
     * Size of the primary Disk
     */
    primary_disk_size: number;
    /**
     * Private networks information
     */
    private_net: Array<server_private_net>;
    protection: server_protection;
    public_net: server_public_net;
    /**
     * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
     */
    rescue_enabled: boolean;
    server_type: server_type;
    /**
     * Status of the Server
     */
    status: 'deleting' | 'initializing' | 'migrating' | 'off' | 'rebuilding' | 'running' | 'starting' | 'stopping' | 'unknown';
    /**
     * IDs of Volumes assigned to this Server
     */
    volumes?: Array<(number)>;
};
/**
 * Status of the Server
 */
export type status4 = 'deleting' | 'initializing' | 'migrating' | 'off' | 'rebuilding' | 'running' | 'starting' | 'stopping' | 'unknown';
export type server_private_net = {
    /**
     * Additional IP addresses of the server on the network.
     */
    alias_ips?: Array<(string)>;
    /**
     * The server IP address on the network.
     */
    ip?: string;
    /**
     * The server MAC address on the network.
     */
    mac_address?: string;
    /**
     * The Network ID the server is attached to.
     */
    network?: number;
};
/**
 * Protection configuration for the Server
 */
export type server_protection = {
    /**
     * If true, prevents the Server from being deleted
     */
    delete: boolean;
    /**
     * If true, prevents the Server from being rebuilt
     */
    rebuild: boolean;
};
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
 */
export type server_public_net = {
    /**
     * Firewalls applied to the public network interface of this Server
     */
    firewalls?: Array<{
        /**
         * ID of the Firewall.
         */
        id?: number;
        /**
         * Status of the Firewall on the Server
         */
        status?: 'applied' | 'pending';
    }>;
    /**
     * IDs of Floating IPs assigned to this Server
     */
    floating_ips: Array<(number)>;
    ipv4: ipv4;
    ipv6: ipv6;
};
export type server_type = {
    architecture: architecture;
    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number;
    /**
     * Type of cpu
     */
    cpu_type: 'dedicated' | 'shared';
    /**
     * This field is deprecated. Use the deprecation object instead
     */
    deprecated: (boolean) | null;
    deprecation?: deprecation_info;
    /**
     * Description of the Server type
     */
    description: string;
    /**
     * Disk size a Server of this type will have in GB
     */
    disk: number;
    /**
     * ID of the Server type
     */
    id: number;
    /**
     * **Deprecated**: This field is deprecated and set to `null` since 5 August 2024.
     * Please refer to the `included_traffic` field in `prices` instead.
     * Learn more about this change in [the Changelog](https://docs.hetzner.cloud/changelog#2024-07-25-cloud-api-returns-traffic-information-in-different-format).
     *
     * @deprecated
     */
    included_traffic: (number) | null;
    /**
     * Memory a Server of this type will have in GB
     */
    memory: number;
    /**
     * Unique identifier of the Server type
     */
    name: string;
    /**
     * Prices in different Locations
     */
    prices: Array<price_per_time>;
    /**
     * Type of Server boot drive. Local has higher speed. Network has better availability.
     */
    storage_type: 'local' | 'network';
};
/**
 * Type of cpu
 */
export type cpu_type = 'dedicated' | 'shared';
/**
 * Type of Server boot drive. Local has higher speed. Network has better availability.
 */
export type storage_type = 'local' | 'network';
/**
 * Request for POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/set_rules
 */
export type set_rules_request = {
    /**
     * Array of rules.
     *
     * Limited to a maximum of 50 rules per Firewall.
     *
     */
    rules: Array<rule>;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/set_rules
 */
export type set_rules_response = {
    actions: Array<action>;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/shutdown
 */
export type shutdown_server_response = {
    action: action;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/reboot
 */
export type soft_reboot_server_response = {
    action: action;
};
/**
 * SSH keys are public keys you provide to the cloud system. They can be injected into Servers at creation time. We highly recommend that you use keys instead of passwords to manage your Servers.
 */
export type ssh_key = {
    /**
     * Point in time when the Resource was created (in ISO-8601 format).
     */
    created: string;
    /**
     * Fingerprint of public key
     */
    fingerprint: string;
    /**
     * ID of the SSH Key.
     */
    id: number;
    labels: labels;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Public key
     */
    public_key: string;
};
/**
 * Subnets divide the ip_range from the parent Network object into multiple Subnetworks that you can use for different specific purposes.
 */
export type subnet = {
    /**
     * IP range in CIDR block notation of the whole subnetwork.
     *
     * Must be a subnet of the parent Network `ip_range`.
     *
     * Must not overlap with any other subnets or with any destinations in routes.
     *
     * Minimum network size is /30. We highly recommend that you pick a larger network with a /24 netmask.
     *
     */
    ip_range?: string;
    /**
     * Name of Network zone.
     *
     * The Location object contains the `network_zone` property each Location belongs to.
     * | Name of Network Zone.
     *
     * The Location object contains the `network_zone` it belongs to.
     *
     */
    network_zone: string;
    /**
     * Type of Subnetwork.
     *
     * - `cloud` - Used to connect cloud servers and load balancers.
     * - `server` - Same as the `cloud` type. **Deprecated**, use the `cloud` type instead.
     * - `vswitch` - Used to [connect cloud servers and load balancers with dedicated servers](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch).
     *
     */
    type: 'cloud' | 'server' | 'vswitch';
    /**
     * ID of the robot vSwitch.
     *
     * Must only be supplied for subnets of type vswitch.
     * | ID of the robot vSwitch.
     *
     * Must be supplied if the Subnet is of type `vswitch`.
     *
     */
    vswitch_id?: number;
};
/**
 * Type of Subnetwork.
 *
 * - `cloud` - Used to connect cloud servers and load balancers.
 * - `server` - Same as the `cloud` type. **Deprecated**, use the `cloud` type instead.
 * - `vswitch` - Used to [connect cloud servers and load balancers with dedicated servers](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch).
 *
 */
export type type11 = 'cloud' | 'server' | 'vswitch';
export type subnet_with_gateway = {
    /**
     * Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.
     */
    gateway: string;
    /**
     * IP range in CIDR block notation of the whole subnetwork.
     */
    ip_range?: string;
    /**
     * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
     */
    network_zone: string;
    /**
     * Type of Subnetwork.
     *
     * - `cloud` - Used to connect cloud servers and load balancers.
     * - `server` - Same as the `cloud` type. **Deprecated**, use the `cloud` type instead.
     * - `vswitch` - Used to [connect cloud servers and load balancers with dedicated servers](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch).
     *
     */
    type: 'cloud' | 'server' | 'vswitch';
    /**
     * ID of the robot vSwitch if the subnet is of type vswitch.
     */
    vswitch_id?: (number) | null;
};
/**
 * A target for a load balancer
 */
export type target = {
    /**
     * List of health statuses of the services on this target. Only present for target types "server" and "ip".
     */
    health_status?: Array<health_status>;
    /**
     * IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip".
     */
    ip?: {
        /**
         * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
         */
        ip: string;
    };
    label_selector?: label_selector;
    server?: resource_id;
    /**
     * List of resolved label selector target Servers. Only present for type "label_selector".
     */
    targets?: Array<selected_target>;
    /**
     * Type of the resource
     */
    type: 'ip' | 'label_selector' | 'server';
    /**
     * Use the private network IP instead of the public IP. Only present for target types "server" and "label_selector".
     */
    use_private_ip?: boolean;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/unassign
 */
export type unassign_floating_ip_response = {
    action: action;
};
/**
 * Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/unassign
 */
export type unassign_primary_ip_from_resource_response = {
    action: action;
};
/**
 * An update to a service for a Load Balancer.
 */
export type update_load_balancer_service = {
    /**
     * Port the Load Balancer will balance to
     */
    destination_port?: number;
    /**
     * Service health check
     */
    health_check?: {
        /**
         * Additional configuration for protocol http
         */
        http?: {
            /**
             * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
             */
            domain?: (string) | null;
            /**
             * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
             */
            path?: string;
            /**
             * String that must be contained in HTTP response in order to pass the health check
             */
            response?: string;
            /**
             * List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones.
             */
            status_codes?: Array<(string)>;
            /**
             * Use HTTPS for health check
             */
            tls?: boolean;
        };
        /**
         * Time interval in seconds health checks are performed
         */
        interval?: number;
        /**
         * Port the health check will be performed on
         */
        port?: number;
        /**
         * Type of the health check
         */
        protocol?: 'http' | 'tcp';
        /**
         * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
         */
        retries?: number;
        /**
         * Time in seconds after an attempt is considered a timeout
         */
        timeout?: number;
    };
    http?: http;
    /**
     * Port the Load Balancer listens on
     */
    listen_port: number;
    /**
     * Protocol of the Load Balancer
     */
    protocol?: 'http' | 'https' | 'tcp';
    /**
     * Is Proxyprotocol enabled or not
     */
    proxyprotocol?: boolean;
};
export type update_service_request = update_load_balancer_service;
/**
 * Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/update_service
 */
export type update_service_response = {
    action: action;
};
/**
 * A Volume is a highly-available, scalable, and SSD-based block storage for Servers. Pricing for Volumes depends on the Volume size and Location, not the actual used storage. Please see [Hetzner Wiki](https://wiki.hetzner.de/index.php/CloudServer/en#Volumes) for more details about Volumes.
 */
export type volume = {
    /**
     * Point in time when the Resource was created (in ISO-8601 format).
     */
    created: string;
    /**
     * Filesystem of the Volume if formatted on creation, null if not formatted on creation
     */
    format: (string) | null;
    /**
     * ID of the Volume.
     */
    id: number;
    labels: labels;
    /**
     * Device path on the file system for the Volume
     */
    linux_device: string;
    location: location;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    protection: protection;
    /**
     * ID of the Server the Volume is attached to, null if it is not attached at all
     */
    server: (number) | null;
    /**
     * Size in GB of the Volume
     */
    size: number;
    /**
     * Current status of the Volume
     */
    status: 'available' | 'creating';
};
/**
 * Current status of the Volume
 */
export type status5 = 'available' | 'creating';
/**
 * ID of the Action.
 */
export type ParameterPathActionActionID = number;
/**
 * ID of the Action.
 */
export type ParameterPathActionID = number;
/**
 * ID of the Certificate.
 */
export type ParameterPathCertificateID = number;
/**
 * ID of the Datacenter.
 */
export type ParameterPathDatacenterID = number;
/**
 * ID of the Firewall.
 */
export type ParameterPathFirewallID = number;
/**
 * ID of the Floating IP.
 */
export type ParameterPathFloatingIPID = number;
/**
 * ID of the Resource.
 */
export type ParameterPathID = number;
/**
 * ID of the ISO.
 */
export type ParameterPathISOID = number;
/**
 * ID of the Image.
 */
export type ParameterPathImageID = number;
/**
 * ID of the Load Balancer.
 */
export type ParameterPathLoadBalancerID = number;
/**
 * ID of the Load Balancer Type.
 */
export type ParameterPathLoadBalancerTypeID = number;
/**
 * ID of the Location.
 */
export type ParameterPathLocationID = number;
/**
 * ID of the Network.
 */
export type ParameterPathNetworkID = number;
/**
 * ID of the Placement Group.
 */
export type ParameterPathPlacementGroupID = number;
/**
 * ID of the Primary IP.
 */
export type ParameterPathPrimaryIPID = number;
/**
 * ID of the SSH Key.
 */
export type ParameterPathSSHKeyID = number;
/**
 * ID of the Server.
 */
export type ParameterPathServerID = number;
/**
 * ID of the Server Type.
 */
export type ParameterPathServerTypeID = number;
/**
 * ID of the Volume.
 */
export type ParameterPathVolumeID = number;
/**
 * Filter the actions by ID. Can be used multiple times. The response will only contain
 * actions matching the specified IDs.
 *
 */
export type ParameterQueryActionID = number;
/**
 * Sort actions by field and direction. Can be used multiple times. For more
 * information, see "[Sorting](#sorting)".
 *
 */
export type ParameterQueryActionSort = 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
/**
 * Filter the actions by status. Can be used multiple times. The response will only
 * contain actions matching the specified statuses.
 *
 */
export type ParameterQueryActionStatus = 'running' | 'success' | 'error';
/**
 * Limit the items in the response to be created after a specified time.
 *
 * The parameter is a datetime formatted as specified by RFC3339.
 *
 */
export type ParameterQueryCreatedAfter = string;
/**
 * Limit the items in the response to be created before a specified time.
 *
 * The parameter is a datetime formatted as specified by RFC3339.
 *
 */
export type ParameterQueryCreatedBefore = string;
/**
 * Filter resources by labels. The response will only contain resources matching the
 * label selector. For more information, see "[Label Selector](#label-selector)".
 *
 */
export type ParameterQueryLabelSelector = string;
/**
 * Filter resources by their name. The response will only contain the resources
 * matching the specified name.
 *
 */
export type ParameterQueryName = string;
/**
 * Page number to return. For more information, see "[Pagination](#pagination)".
 */
export type ParameterQueryPaginationPage = number;
/**
 * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
 */
export type ParameterQueryPaginationPerPage = number;
/**
 * Filter for project IDs.Can be used multiple times.
 *
 * The response will only contain items with the specified projects.
 *
 */
export type ParameterQueryProjectIDList = Array<(number)>;
/**
 * Sort resources by field and direction. Can be used multiple times. For more
 * information, see "[Sorting](#sorting)".
 *
 */
export type ParameterQuerySortByIDAndCreated = 'id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc';
/**
 * Sort resources by field and direction. Can be used multiple times. For more
 * information, see "[Sorting](#sorting)".
 *
 */
export type ParameterQuerySortByIDAndName = 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc';
/**
 * Sort resources by field and direction. Can be used multiple times. For more
 * information, see "[Sorting](#sorting)".
 *
 */
export type ParameterQuerySortByIDAndNameAndCreated = 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc';
export type ListActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListActionsResponse = (list_actions_response);
export type ListActionsError = unknown;
export type GetActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetActionResponse = (get_action_response);
export type GetActionError = unknown;
export type ListCertificatesData = {
    query?: {
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc';
        /**
         * Can be used multiple times. The response will only contain Certificates matching the type.
         */
        type?: 'uploaded' | 'managed';
    };
};
export type ListCertificatesResponse = (list_certificates_response);
export type ListCertificatesError = unknown;
export type CreateCertificateData = {
    body?: create_certificate_request;
};
export type CreateCertificateResponse = (create_certificate_response);
export type CreateCertificateError = unknown;
export type DeleteCertificateData = {
    path: {
        /**
         * ID of the Certificate.
         */
        id: number;
    };
};
export type DeleteCertificateResponse = (void);
export type DeleteCertificateError = unknown;
export type GetCertificateData = {
    path: {
        /**
         * ID of the Certificate.
         */
        id: number;
    };
};
export type GetCertificateResponse = (get_certificate_response);
export type GetCertificateError = unknown;
export type ReplaceCertificateData = {
    body?: replace_certificate_request;
    path: {
        /**
         * ID of the Certificate.
         */
        id: number;
    };
};
export type ReplaceCertificateResponse = (replace_certificate_response);
export type ReplaceCertificateError = unknown;
export type ListActionsForCertificateData = {
    path: {
        /**
         * ID of the Certificate
         */
        id: number;
    };
    query?: {
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListActionsForCertificateResponse = (list_actions_for_certificate_response);
export type ListActionsForCertificateError = unknown;
export type GetActionForCertificateData = {
    path: {
        /**
         * ID of the Action.
         */
        action_id: number;
        /**
         * ID of the Certificate.
         */
        id: number;
    };
};
export type GetActionForCertificateResponse = (get_action_for_certificate_response);
export type GetActionForCertificateError = unknown;
export type RetryIssuanceOrRenewalData = {
    path: {
        /**
         * ID of the Certificate.
         */
        id: number;
    };
};
export type RetryIssuanceOrRenewalResponse = (retry_issuance_or_renewal_response);
export type RetryIssuanceOrRenewalError = unknown;
export type ListCertificateActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListCertificateActionsResponse = (list_actions_response);
export type ListCertificateActionsError = unknown;
export type GetCertificateActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetCertificateActionResponse = (get_action_response);
export type GetCertificateActionError = unknown;
export type ListDatacentersData = {
    query?: {
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc';
    };
};
export type ListDatacentersResponse = (list_datacenters_response);
export type ListDatacentersError = unknown;
export type GetDatacenterData = {
    path: {
        /**
         * ID of the Datacenter.
         */
        id: number;
    };
};
export type GetDatacenterResponse = (get_datacenter_response);
export type GetDatacenterError = unknown;
export type ListFirewallsData = {
    query?: {
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc';
    };
};
export type ListFirewallsResponse = (list_firewalls_response);
export type ListFirewallsError = unknown;
export type CreateFirewallData = {
    body?: create_firewall_request;
};
export type CreateFirewallResponse = (create_firewall_response);
export type CreateFirewallError = unknown;
export type DeleteFirewallData = {
    path: {
        /**
         * ID of the Firewall.
         */
        id: number;
    };
};
export type DeleteFirewallResponse = (void);
export type DeleteFirewallError = unknown;
export type GetFirewallData = {
    path: {
        /**
         * ID of the Firewall.
         */
        id: number;
    };
};
export type GetFirewallResponse = (get_firewall_response);
export type GetFirewallError = unknown;
export type ReplaceFirewallData = {
    body?: replace_firewall_request;
    path: {
        /**
         * ID of the Firewall.
         */
        id: number;
    };
};
export type ReplaceFirewallResponse = (replace_firewall_response);
export type ReplaceFirewallError = unknown;
export type ListActionsForFirewallData = {
    path: {
        /**
         * ID of the Firewall
         */
        id: number;
    };
    query?: {
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListActionsForFirewallResponse = (list_actions_for_firewall_response);
export type ListActionsForFirewallError = unknown;
export type GetActionForFirewallData = {
    path: {
        /**
         * ID of the Action.
         */
        action_id: number;
        /**
         * ID of the Firewall.
         */
        id: number;
    };
};
export type GetActionForFirewallResponse = (get_action_for_firewall_response);
export type GetActionForFirewallError = unknown;
export type ApplyToResourcesData = {
    body?: apply_to_resources_request;
    path: {
        /**
         * ID of the Firewall.
         */
        id: number;
    };
};
export type ApplyToResourcesResponse = (apply_to_resources_response);
export type ApplyToResourcesError = unknown;
export type RemoveFromResourcesData = {
    body?: remove_from_resources_request;
    path: {
        /**
         * ID of the Firewall.
         */
        id: number;
    };
};
export type RemoveFromResourcesResponse = (remove_from_resources_response);
export type RemoveFromResourcesError = unknown;
export type SetRulesData = {
    body?: set_rules_request;
    path: {
        /**
         * ID of the Firewall.
         */
        id: number;
    };
};
export type SetRulesResponse = (set_rules_response);
export type SetRulesError = unknown;
export type ListFirewallActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListFirewallActionsResponse = (list_actions_response);
export type ListFirewallActionsError = unknown;
export type GetFirewallActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetFirewallActionResponse = (get_action_response);
export type GetFirewallActionError = unknown;
export type ListFloatingIpsData = {
    query?: {
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc';
    };
};
export type ListFloatingIpsResponse = (list_floating_ips_response);
export type ListFloatingIpsError = unknown;
export type CreateFloatingIpData = {
    /**
     * The `type` argument is required while `home_location` and `server` are mutually exclusive.
     */
    body?: create_floating_ip_request;
};
export type CreateFloatingIpResponse = (create_floating_ip_response);
export type CreateFloatingIpError = unknown;
export type DeleteFloatingIpData = {
    path: {
        /**
         * ID of the Floating IP.
         */
        id: number;
    };
};
export type DeleteFloatingIpResponse = (void);
export type DeleteFloatingIpError = unknown;
export type GetFloatingIpData = {
    path: {
        /**
         * ID of the Floating IP.
         */
        id: number;
    };
};
export type GetFloatingIpResponse = (get_floating_ip_response);
export type GetFloatingIpError = unknown;
export type ReplaceFloatingIpData = {
    body?: replace_floating_ip_request;
    path: {
        /**
         * ID of the Floating IP.
         */
        id: number;
    };
};
export type ReplaceFloatingIpResponse = (replace_floating_ip_response);
export type ReplaceFloatingIpError = unknown;
export type ListActionsForFloatingIpData = {
    path: {
        /**
         * ID of the Floating IP.
         */
        id: number;
    };
    query?: {
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListActionsForFloatingIpResponse = (list_actions_for_floating_ip_response);
export type ListActionsForFloatingIpError = unknown;
export type GetActionForFloatingIpData = {
    path: {
        /**
         * ID of the Action.
         */
        action_id: number;
        /**
         * ID of the Floating IP.
         */
        id: number;
    };
};
export type GetActionForFloatingIpResponse = (get_action_for_floating_ip_response);
export type GetActionForFloatingIpError = unknown;
export type AssignFloatingIpToServerData = {
    body?: assign_floating_ip_to_server_request;
    path: {
        /**
         * ID of the Floating IP.
         */
        id: number;
    };
};
export type AssignFloatingIpToServerResponse = (assign_floating_ip_to_server_response);
export type AssignFloatingIpToServerError = unknown;
export type ChangeReverseDnsRecordsForFloatingIpData = {
    /**
     * The `ip` attributes specifies for which IP address the record is set. For IPv4 addresses this must be the exact address of the [Floating IP](#floating-ips). For IPv6 addresses this must be a single address within the `/64` subnetwork of the [Floating IP](#floating-ips).
     *
     * The `dns_ptr` attribute specifies the hostname used for the IP address.
     *
     * For IPv6 [Floating IPs](#floating-ips) up to 100 entries can be created.
     *
     */
    body?: dns_ptr;
    path: {
        /**
         * ID of the Floating IP.
         */
        id: number;
    };
};
export type ChangeReverseDnsRecordsForFloatingIpResponse = (change_reverse_dns_records_for_floating_ip_response);
export type ChangeReverseDnsRecordsForFloatingIpError = unknown;
export type ChangeFloatingIpProtectionData = {
    body?: protection;
    path: {
        /**
         * ID of the Floating IP.
         */
        id: number;
    };
};
export type ChangeFloatingIpProtectionResponse = (change_floating_ip_protection_response);
export type ChangeFloatingIpProtectionError = unknown;
export type UnassignFloatingIpData = {
    path: {
        /**
         * ID of the Floating IP.
         */
        id: number;
    };
};
export type UnassignFloatingIpResponse = (unassign_floating_ip_response);
export type UnassignFloatingIpError = unknown;
export type ListFloatingIpActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListFloatingIpActionsResponse = (list_actions_response);
export type ListFloatingIpActionsError = unknown;
export type GetFloatingIpActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetFloatingIpActionResponse = (get_action_response);
export type GetFloatingIpActionError = unknown;
export type ListImagesData = {
    query?: {
        /**
         * Return only Images with the given architecture.
         */
        architecture?: string;
        /**
         * Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`
         */
        bound_to?: string;
        /**
         * Can be used multiple times.
         */
        include_deprecated?: boolean;
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc';
        /**
         * Can be used multiple times. The response will only contain Images matching the status.
         */
        status?: 'available' | 'creating';
        /**
         * Can be used multiple times.
         */
        type?: 'system' | 'snapshot' | 'backup' | 'app';
    };
};
export type ListImagesResponse = (list_images_response);
export type ListImagesError = unknown;
export type DeleteImageData = {
    path: {
        /**
         * ID of the Image.
         */
        id: number;
    };
};
export type DeleteImageResponse = (void);
export type DeleteImageError = unknown;
export type GetImageData = {
    path: {
        /**
         * ID of the Image.
         */
        id: number;
    };
};
export type GetImageResponse = (get_image_response);
export type GetImageError = unknown;
export type ReplaceImageData = {
    body?: replace_image_request;
    path: {
        /**
         * ID of the Image.
         */
        id: number;
    };
};
export type ReplaceImageResponse = (replace_image_response);
export type ReplaceImageError = unknown;
export type ListActionsForImageData = {
    path: {
        /**
         * ID of the Image.
         */
        id: number;
    };
    query?: {
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListActionsForImageResponse = (list_actions_for_image_response);
export type ListActionsForImageError = unknown;
export type GetActionForImageData = {
    path: {
        /**
         * ID of the Action.
         */
        action_id: number;
        /**
         * ID of the Image.
         */
        id: number;
    };
};
export type GetActionForImageResponse = (get_action_for_image_response);
export type GetActionForImageError = unknown;
export type ChangeImageProtectionData = {
    body?: change_image_protection_request;
    path: {
        /**
         * ID of the Image.
         */
        id: number;
    };
};
export type ChangeImageProtectionResponse = (change_image_protection_response);
export type ChangeImageProtectionError = unknown;
export type ListImageActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListImageActionsResponse = (list_actions_response);
export type ListImageActionsError = unknown;
export type GetImageActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetImageActionResponse = (get_action_response);
export type GetImageActionError = unknown;
export type ListIsosData = {
    query?: {
        /**
         * Return only ISOs with the given architecture.
         */
        architecture?: string;
        /**
         * Include Images with wildcard architecture (architecture is null). Works only if architecture filter is specified.
         */
        include_architecture_wildcard?: boolean;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
    };
};
export type ListIsosResponse = (list_isos_response);
export type ListIsosError = unknown;
export type GetIsoData = {
    path: {
        /**
         * ID of the ISO.
         */
        id: number;
    };
};
export type GetIsoResponse = (get_iso_response);
export type GetIsoError = unknown;
export type ListLoadBalancerTypesData = {
    query?: {
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
    };
};
export type ListLoadBalancerTypesResponse = (list_load_balancer_types_response);
export type ListLoadBalancerTypesError = unknown;
export type GetLoadBalancerTypeData = {
    path: {
        /**
         * ID of the Load Balancer Type.
         */
        id: number;
    };
};
export type GetLoadBalancerTypeResponse = (get_load_balancer_type_response);
export type GetLoadBalancerTypeError = unknown;
export type ListLoadBalancersData = {
    query?: {
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc';
    };
};
export type ListLoadBalancersResponse = (list_load_balancers_response);
export type ListLoadBalancersError = unknown;
export type CreateLoadBalancerData = {
    body?: create_load_balancer_request;
};
export type CreateLoadBalancerResponse = (create_load_balancer_response);
export type CreateLoadBalancerError = unknown;
export type DeleteLoadBalancerData = {
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type DeleteLoadBalancerResponse = (void);
export type DeleteLoadBalancerError = unknown;
export type GetLoadBalancerData = {
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type GetLoadBalancerResponse = (get_load_balancer_response);
export type GetLoadBalancerError = unknown;
export type ReplaceLoadBalancerData = {
    body?: replace_load_balancer_request;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type ReplaceLoadBalancerResponse = (replace_load_balancer_response);
export type ReplaceLoadBalancerError = unknown;
export type ListActionsForLoadBalancerData = {
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
    query?: {
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListActionsForLoadBalancerResponse = (list_actions_for_load_balancer_response);
export type ListActionsForLoadBalancerError = unknown;
export type GetActionForLoadBalancerData = {
    path: {
        /**
         * ID of the Action.
         */
        action_id: number;
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type GetActionForLoadBalancerResponse = (get_action_for_load_balancer_response);
export type GetActionForLoadBalancerError = unknown;
export type AddServiceData = {
    body?: load_balancer_service;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type AddServiceResponse = (add_service_response);
export type AddServiceError = unknown;
export type AddTargetData = {
    body?: add_target_request;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type AddTargetResponse = (add_target_response);
export type AddTargetError = unknown;
export type AttachLoadBalancerToNetworkData = {
    body?: attach_load_balancer_to_network_request;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type AttachLoadBalancerToNetworkResponse = (attach_load_balancer_to_network_response);
export type AttachLoadBalancerToNetworkError = unknown;
export type ChangeAlgorithmData = {
    body?: load_balancer_algorithm;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type ChangeAlgorithmResponse = (change_algorithm_response);
export type ChangeAlgorithmError = unknown;
export type ChangeReverseDnsEntryForThisLoadBalancerData = {
    /**
     * Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.
     */
    body?: change_reverse_dns_entry_for_this_load_balancer_request;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type ChangeReverseDnsEntryForThisLoadBalancerResponse = (change_reverse_dns_entry_for_this_load_balancer_response);
export type ChangeReverseDnsEntryForThisLoadBalancerError = unknown;
export type ChangeLoadBalancerProtectionData = {
    body?: change_load_balancer_protection_request;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type ChangeLoadBalancerProtectionResponse = (change_load_balancer_protection_response);
export type ChangeLoadBalancerProtectionError = unknown;
export type ChangeTypeOfLoadBalancerData = {
    body?: change_type_of_load_balancer_request;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type ChangeTypeOfLoadBalancerResponse = (change_type_of_load_balancer_response);
export type ChangeTypeOfLoadBalancerError = unknown;
export type DeleteServiceData = {
    body?: delete_service_request;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type DeleteServiceResponse = (delete_service_response);
export type DeleteServiceError = unknown;
export type DetachLoadBalancerFromNetworkData = {
    body?: detach_load_balancer_from_network_request;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type DetachLoadBalancerFromNetworkResponse = (detach_load_balancer_from_network_response);
export type DetachLoadBalancerFromNetworkError = unknown;
export type DisablePublicInterfaceOfLoadBalancerData = {
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type DisablePublicInterfaceOfLoadBalancerResponse = (disable_public_interface_of_load_balancer_response);
export type DisablePublicInterfaceOfLoadBalancerError = unknown;
export type EnablePublicInterfaceOfLoadBalancerData = {
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type EnablePublicInterfaceOfLoadBalancerResponse = (enable_public_interface_of_load_balancer_response);
export type EnablePublicInterfaceOfLoadBalancerError = unknown;
export type RemoveTargetData = {
    body?: remove_target_request;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type RemoveTargetResponse = (remove_target_response);
export type RemoveTargetError = unknown;
export type UpdateServiceData = {
    body?: update_load_balancer_service;
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
};
export type UpdateServiceResponse = (update_service_response);
export type UpdateServiceError = unknown;
export type GetMetricsForLoadbalancerData = {
    path: {
        /**
         * ID of the Load Balancer.
         */
        id: number;
    };
    query: {
        /**
         * End of period to get Metrics for (in ISO-8601 format)
         */
        end: string;
        /**
         * Start of period to get Metrics for (in ISO-8601 format)
         */
        start: string;
        /**
         * Resolution of results in seconds
         */
        step?: string;
        /**
         * Type of metrics to get
         */
        type: 'open_connections' | 'connections_per_second' | 'requests_per_second' | 'bandwidth';
    };
};
export type GetMetricsForLoadbalancerResponse = (get_metrics_for_loadbalancer_response);
export type GetMetricsForLoadbalancerError = unknown;
export type ListLoadBalancerActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListLoadBalancerActionsResponse = (list_actions_response);
export type ListLoadBalancerActionsError = unknown;
export type GetLoadBalancerActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetLoadBalancerActionResponse = (get_action_response);
export type GetLoadBalancerActionError = unknown;
export type ListLocationsData = {
    query?: {
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc';
    };
};
export type ListLocationsResponse = (list_locations_response);
export type ListLocationsError = unknown;
export type GetLocationData = {
    path: {
        /**
         * ID of the Location.
         */
        id: number;
    };
};
export type GetLocationResponse = (get_location_response);
export type GetLocationError = unknown;
export type ListNetworksData = {
    query?: {
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
    };
};
export type ListNetworksResponse = (list_networks_response);
export type ListNetworksError = unknown;
export type CreateNetworkData = {
    body?: create_network_request;
};
export type CreateNetworkResponse = (create_network_response);
export type CreateNetworkError = unknown;
export type DeleteNetworkData = {
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type DeleteNetworkResponse = (void);
export type DeleteNetworkError = unknown;
export type GetNetworkData = {
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type GetNetworkResponse = (get_network_response);
export type GetNetworkError = unknown;
export type ReplaceNetworkData = {
    body?: replace_network_request;
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type ReplaceNetworkResponse = (replace_network_response);
export type ReplaceNetworkError = unknown;
export type ListActionsForNetworkData = {
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
    query?: {
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListActionsForNetworkResponse = (list_actions_for_network_response);
export type ListActionsForNetworkError = unknown;
export type GetActionForNetworkData = {
    path: {
        /**
         * ID of the Action.
         */
        action_id: number;
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type GetActionForNetworkResponse = (get_action_for_network_response);
export type GetActionForNetworkError = unknown;
export type AddRouteToNetworkData = {
    body?: route;
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type AddRouteToNetworkResponse = (add_route_to_network_response);
export type AddRouteToNetworkError = unknown;
export type AddSubnetToNetworkData = {
    body?: subnet;
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type AddSubnetToNetworkResponse = (add_subnet_to_network_response);
export type AddSubnetToNetworkError = unknown;
export type ChangeIpRangeOfNetworkData = {
    body?: change_ip_range_of_network_request;
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type ChangeIpRangeOfNetworkResponse = (change_ip_range_of_network_response);
export type ChangeIpRangeOfNetworkError = unknown;
export type ChangeNetworkProtectionData = {
    body?: change_network_protection_request;
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type ChangeNetworkProtectionResponse = (change_network_protection_response);
export type ChangeNetworkProtectionError = unknown;
export type DeleteRouteFromNetworkData = {
    body?: route;
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type DeleteRouteFromNetworkResponse = (delete_route_from_network_response);
export type DeleteRouteFromNetworkError = unknown;
export type DeleteSubnetFromNetworkData = {
    body?: delete_subnet_from_network_request;
    path: {
        /**
         * ID of the Network.
         */
        id: number;
    };
};
export type DeleteSubnetFromNetworkResponse = (delete_subnet_from_network_response);
export type DeleteSubnetFromNetworkError = unknown;
export type ListNetworkActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListNetworkActionsResponse = (list_actions_response);
export type ListNetworkActionsError = unknown;
export type GetNetworkActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetNetworkActionResponse = (get_action_response);
export type GetNetworkActionError = unknown;
export type ListPlacementgroupsData = {
    query?: {
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc';
        /**
         * Can be used multiple times. The response will only contain PlacementGroups matching the type.
         */
        type?: 'spread';
    };
};
export type ListPlacementgroupsResponse = (list_placementgroups_response);
export type ListPlacementgroupsError = unknown;
export type CreatePlacementgroupData = {
    body?: create_placementgroup_request;
};
export type CreatePlacementgroupResponse = (create_placementgroup_response);
export type CreatePlacementgroupError = unknown;
export type DeletePlacementgroupData = {
    path: {
        /**
         * ID of the Placement Group.
         */
        id: number;
    };
};
export type DeletePlacementgroupResponse = (void);
export type DeletePlacementgroupError = unknown;
export type GetPlacementgroupData = {
    path: {
        /**
         * ID of the Placement Group.
         */
        id: number;
    };
};
export type GetPlacementgroupResponse = (get_placementgroup_response);
export type GetPlacementgroupError = unknown;
export type ReplacePlacementgroupData = {
    body?: replace_placementgroup_request;
    path: {
        /**
         * ID of the Placement Group.
         */
        id: number;
    };
};
export type ReplacePlacementgroupResponse = (replace_placementgroup_response);
export type ReplacePlacementgroupError = unknown;
export type ListPricesResponse = (list_prices_response);
export type ListPricesError = unknown;
export type ListPrimaryIpsData = {
    query?: {
        /**
         * Can be used to filter resources by their ip. The response will only contain the resources matching the specified ip.
         */
        ip?: string;
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'created' | 'created:asc' | 'created:desc';
    };
};
export type ListPrimaryIpsResponse = (list_primary_ips_response);
export type ListPrimaryIpsError = unknown;
export type CreatePrimaryIpData = {
    /**
     * The `type` argument is required while `datacenter` and `assignee_id` are mutually exclusive.
     */
    body?: create_primary_ip_request;
};
export type CreatePrimaryIpResponse = (create_primary_ip_response);
export type CreatePrimaryIpError = unknown;
export type DeletePrimaryIpData = {
    path: {
        /**
         * ID of the Primary IP.
         */
        id: number;
    };
};
export type DeletePrimaryIpResponse = (void);
export type DeletePrimaryIpError = unknown;
export type GetPrimaryIpData = {
    path: {
        /**
         * ID of the Primary IP.
         */
        id: number;
    };
};
export type GetPrimaryIpResponse = (get_primary_ip_response);
export type GetPrimaryIpError = unknown;
export type ReplacePrimaryIpData = {
    body?: replace_primary_ip_request;
    path: {
        /**
         * ID of the Primary IP.
         */
        id: number;
    };
};
export type ReplacePrimaryIpResponse = (replace_primary_ip_response);
export type ReplacePrimaryIpError = unknown;
export type AssignPrimaryIpToResourceData = {
    body?: assign_primary_ip_to_resource_request;
    path: {
        /**
         * ID of the Primary IP.
         */
        id: number;
    };
};
export type AssignPrimaryIpToResourceResponse = (assign_primary_ip_to_resource_response);
export type AssignPrimaryIpToResourceError = unknown;
export type ChangeReverseDnsEntryForPrimaryIpData = {
    /**
     * Select the IP address for which to change the DNS entry by passing `ip`. For a Primary IP of type `ipv4` this must exactly match the IP address of the Primary IP. For a Primary IP of type `ipv6` this must be a single IP within the IPv6 /64 range that belongs to this Primary IP. You can add up to 100 IPv6 reverse DNS entries.
     *
     * The target hostname is set by passing `dns_ptr`.
     *
     */
    body?: change_reverse_dns_entry_for_primary_ip_request;
    path: {
        /**
         * ID of the Primary IP.
         */
        id: number;
    };
};
export type ChangeReverseDnsEntryForPrimaryIpResponse = (change_reverse_dns_entry_for_primary_ip_response);
export type ChangeReverseDnsEntryForPrimaryIpError = unknown;
export type ChangePrimaryIpProtectionData = {
    body?: change_primary_ip_protection_request;
    path: {
        /**
         * ID of the Primary IP.
         */
        id: number;
    };
};
export type ChangePrimaryIpProtectionResponse = (change_primary_ip_protection_response);
export type ChangePrimaryIpProtectionError = unknown;
export type UnassignPrimaryIpFromResourceData = {
    path: {
        /**
         * ID of the Primary IP.
         */
        id: number;
    };
};
export type UnassignPrimaryIpFromResourceResponse = (unassign_primary_ip_from_resource_response);
export type UnassignPrimaryIpFromResourceError = unknown;
export type ListPrimaryIpActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListPrimaryIpActionsResponse = (list_actions_response);
export type ListPrimaryIpActionsError = unknown;
export type GetPrimaryIpActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetPrimaryIpActionResponse = (get_action_response);
export type GetPrimaryIpActionError = unknown;
export type ListServerTypesData = {
    query?: {
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
    };
};
export type ListServerTypesResponse = (list_server_types_response);
export type ListServerTypesError = unknown;
export type GetServerTypeData = {
    path: {
        /**
         * ID of the Server Type.
         */
        id: number;
    };
};
export type GetServerTypeResponse = (get_server_type_response);
export type GetServerTypeError = unknown;
export type ListServersData = {
    query?: {
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc';
        /**
         * Can be used multiple times. The response will only contain Server matching the status
         */
        status?: 'initializing' | 'starting' | 'running' | 'stopping' | 'off' | 'deleting' | 'rebuilding' | 'migrating' | 'unknown';
    };
};
export type ListServersResponse = (list_servers_response);
export type ListServersError = unknown;
export type CreateServerData = {
    /**
     * Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
     *
     * For `server_type` you can either use the ID as listed in `/server_types` or its name.
     *
     * For `image` you can either use the ID as listed in `/images` or its name.
     *
     * If you want to create the Server in a Location, you must set `location` to the ID or name as listed in `/locations`. This is the recommended way. You can be even more specific by setting `datacenter` to the ID or name as listed in `/datacenters`. However we only recommend this if you want to assign a specific Primary IP to the Server which is located in the specified Datacenter.
     *
     * Some properties like `start_after_create` or `automount` will trigger Actions after the Server is created. Those Actions are listed in the `next_actions` field in the response.
     *
     * For accessing your Server we strongly recommend to use SSH keys by passing the respective key IDs in `ssh_keys`. If you do not specify any `ssh_keys` we will generate a root password for you and return it in the response.
     *
     * Please note that provided user-data is stored in our systems. While we take measures to protect it we highly recommend that you don’t use it to store passwords or other sensitive information.
     *
     * #### Call specific error codes
     *
     * | Code                             | Description                                                |
     * |----------------------------------|------------------------------------------------------------|
     * | `placement_error`                | An error during the placement occurred                     |
     * | `primary_ip_assigned`            | The specified Primary IP is already assigned to a server   |
     * | `primary_ip_datacenter_mismatch` | The specified Primary IP is in a different datacenter      |
     * | `primary_ip_version_mismatch`    | The specified Primary IP has the wrong IP Version          |
     *
     */
    body?: create_server_request;
};
export type CreateServerResponse = (create_server_response);
export type CreateServerError = unknown;
export type DeleteServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type DeleteServerResponse = (delete_server_response);
export type DeleteServerError = unknown;
export type GetServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type GetServerResponse = (get_server_response);
export type GetServerError = unknown;
export type ReplaceServerData = {
    body?: replace_server_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type ReplaceServerResponse = (replace_server_response);
export type ReplaceServerError = unknown;
export type ListActionsForServerData = {
    path: {
        /**
         * ID of the Server
         */
        id: number;
    };
    query?: {
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListActionsForServerResponse = (list_actions_for_server_response);
export type ListActionsForServerError = unknown;
export type GetActionForServerData = {
    path: {
        /**
         * ID of the Action.
         */
        action_id: number;
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type GetActionForServerResponse = (get_action_for_server_response);
export type GetActionForServerError = unknown;
export type AddServerToPlacementGroupData = {
    body?: add_server_to_placement_group_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type AddServerToPlacementGroupResponse = (add_server_to_placement_group_response);
export type AddServerToPlacementGroupError = unknown;
export type AttachIsoToServerData = {
    body?: attach_iso_to_server_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type AttachIsoToServerResponse = (attach_iso_to_server_response);
export type AttachIsoToServerError = unknown;
export type AttachServerToNetworkData = {
    body?: attach_server_to_network_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type AttachServerToNetworkResponse = (attach_server_to_network_response);
export type AttachServerToNetworkError = unknown;
export type ChangeAliasIpsOfNetworkData = {
    body?: change_alias_ips_of_network_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type ChangeAliasIpsOfNetworkResponse = (change_alias_ips_of_network_response);
export type ChangeAliasIpsOfNetworkError = unknown;
export type ChangeReverseDnsEntryForThisServerData = {
    /**
     * Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.
     */
    body?: change_reverse_dns_entry_for_this_server_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type ChangeReverseDnsEntryForThisServerResponse = (change_reverse_dns_entry_for_this_server_response);
export type ChangeReverseDnsEntryForThisServerError = unknown;
export type ChangeServerProtectionData = {
    body?: change_server_protection_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type ChangeServerProtectionResponse = (change_server_protection_response);
export type ChangeServerProtectionError = unknown;
export type ChangeTypeOfServerData = {
    body?: change_type_of_server_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type ChangeTypeOfServerResponse = (change_type_of_server_response);
export type ChangeTypeOfServerError = unknown;
export type CreateImageFromServerData = {
    body?: create_image_from_server_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type CreateImageFromServerResponse = (create_image_from_server_response);
export type CreateImageFromServerError = unknown;
export type DetachServerFromNetworkData = {
    body?: detach_server_from_network_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type DetachServerFromNetworkResponse = (detach_server_from_network_response);
export type DetachServerFromNetworkError = unknown;
export type DetachIsoFromServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type DetachIsoFromServerResponse = (detach_iso_from_server_response);
export type DetachIsoFromServerError = unknown;
export type DisableBackupsForServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type DisableBackupsForServerResponse = (disable_backups_for_server_response);
export type DisableBackupsForServerError = unknown;
export type DisableRescueModeForServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type DisableRescueModeForServerResponse = (disable_rescue_mode_for_server_response);
export type DisableRescueModeForServerError = unknown;
export type EnableAndConfigureBackupsForServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type EnableAndConfigureBackupsForServerResponse = (enable_and_configure_backups_for_server_response);
export type EnableAndConfigureBackupsForServerError = unknown;
export type EnableRescueModeForServerData = {
    body?: enable_rescue_mode_for_server_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type EnableRescueModeForServerResponse = (enable_rescue_mode_for_server_response);
export type EnableRescueModeForServerError = unknown;
export type PowerOffServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type PowerOffServerResponse = (power_off_server_response);
export type PowerOffServerError = unknown;
export type PowerOnServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type PowerOnServerResponse = (power_on_server_response);
export type PowerOnServerError = unknown;
export type SoftRebootServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type SoftRebootServerResponse = (soft_reboot_server_response);
export type SoftRebootServerError = unknown;
export type RebuildServerFromImageData = {
    /**
     * To select which Image to rebuild from you can either pass an ID or a name as the `image` argument. Passing a name only works for `system` Images since the other Image types do not have a name set.
     */
    body?: rebuild_server_from_image_request;
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type RebuildServerFromImageResponse = (rebuild_server_from_image_response);
export type RebuildServerFromImageError = unknown;
export type RemoveFromPlacementGroupData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type RemoveFromPlacementGroupResponse = (remove_from_placement_group_response);
export type RemoveFromPlacementGroupError = unknown;
export type RequestConsoleForServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type RequestConsoleForServerResponse = (request_console_for_server_response);
export type RequestConsoleForServerError = unknown;
export type ResetServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type ResetServerResponse = (reset_server_response);
export type ResetServerError = unknown;
export type ResetRootPasswordOfServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type ResetRootPasswordOfServerResponse = (reset_root_password_of_server_response);
export type ResetRootPasswordOfServerError = unknown;
export type ShutdownServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
};
export type ShutdownServerResponse = (shutdown_server_response);
export type ShutdownServerError = unknown;
export type GetMetricsForServerData = {
    path: {
        /**
         * ID of the Server.
         */
        id: number;
    };
    query: {
        /**
         * End of period to get Metrics for (in ISO-8601 format)
         */
        end: string;
        /**
         * Start of period to get Metrics for (in ISO-8601 format)
         */
        start: string;
        /**
         * Resolution of results in seconds
         */
        step?: string;
        /**
         * Type of metrics to get
         */
        type: 'cpu' | 'disk' | 'network';
    };
};
export type GetMetricsForServerResponse = (get_metrics_for_server_response);
export type GetMetricsForServerError = unknown;
export type ListServerActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListServerActionsResponse = (list_actions_response);
export type ListServerActionsError = unknown;
export type GetServerActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetServerActionResponse = (get_action_response);
export type GetServerActionError = unknown;
export type ListSshKeysData = {
    query?: {
        /**
         * Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint.
         */
        fingerprint?: string;
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc';
    };
};
export type ListSshKeysResponse = (list_ssh_keys_response);
export type ListSshKeysError = unknown;
export type CreateSshKeyData = {
    body?: create_ssh_key_request;
};
export type CreateSshKeyResponse = (create_ssh_key_response);
export type CreateSshKeyError = unknown;
export type DeleteSshKeyData = {
    path: {
        /**
         * ID of the SSH Key.
         */
        id: number;
    };
};
export type DeleteSshKeyResponse = (void);
export type DeleteSshKeyError = unknown;
export type GetSshKeyData = {
    path: {
        /**
         * ID of the SSH Key.
         */
        id: number;
    };
};
export type GetSshKeyResponse = (get_ssh_key_response);
export type GetSshKeyError = unknown;
export type ReplaceSshKeyData = {
    body?: replace_ssh_key_request;
    path: {
        /**
         * ID of the SSH Key.
         */
        id: number;
    };
};
export type ReplaceSshKeyResponse = (replace_ssh_key_response);
export type ReplaceSshKeyError = unknown;
export type ListVolumesData = {
    query?: {
        /**
         * Filter resources by labels. The response will only contain resources matching the
         * label selector. For more information, see "[Label Selector](#label-selector)".
         *
         */
        label_selector?: string;
        /**
         * Filter resources by their name. The response will only contain the resources
         * matching the specified name.
         *
         */
        name?: string;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort resources by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'name' | 'name:asc' | 'name:desc' | 'created' | 'created:asc' | 'created:desc';
        /**
         * Can be used multiple times. The response will only contain Volumes matching the status.
         */
        status?: 'available' | 'creating';
    };
};
export type ListVolumesResponse = (list_volumes_response);
export type ListVolumesError = unknown;
export type CreateVolumeData = {
    body?: create_volume_request;
};
export type CreateVolumeResponse = (create_volume_response);
export type CreateVolumeError = unknown;
export type DeleteVolumeData = {
    path: {
        /**
         * ID of the Volume.
         */
        id: number;
    };
};
export type DeleteVolumeResponse = (void);
export type DeleteVolumeError = unknown;
export type GetVolumeData = {
    path: {
        /**
         * ID of the Volume.
         */
        id: number;
    };
};
export type GetVolumeResponse = (get_volume_response);
export type GetVolumeError = unknown;
export type ReplaceVolumeData = {
    body?: replace_volume_request;
    path: {
        /**
         * ID of the Volume.
         */
        id: number;
    };
};
export type ReplaceVolumeResponse = (replace_volume_response);
export type ReplaceVolumeError = unknown;
export type ListActionsForVolumeData = {
    path: {
        /**
         * ID of the Volume.
         */
        id: number;
    };
    query?: {
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListActionsForVolumeResponse = (list_actions_for_volume_response);
export type ListActionsForVolumeError = unknown;
export type GetActionForVolumeData = {
    path: {
        /**
         * ID of the Action.
         */
        action_id: number;
        /**
         * ID of the Volume.
         */
        id: number;
    };
};
export type GetActionForVolumeResponse = (get_action_for_volume_response);
export type GetActionForVolumeError = unknown;
export type AttachVolumeToServerData = {
    body?: attach_volume_to_server_request;
    path: {
        /**
         * ID of the Volume.
         */
        id: number;
    };
};
export type AttachVolumeToServerResponse = (attach_volume_to_server_response);
export type AttachVolumeToServerError = unknown;
export type ChangeVolumeProtectionData = {
    body?: change_volume_protection_request;
    path: {
        /**
         * ID of the Volume.
         */
        id: number;
    };
};
export type ChangeVolumeProtectionResponse = (change_volume_protection_response);
export type ChangeVolumeProtectionError = unknown;
export type DetachVolumeData = {
    path: {
        /**
         * ID of the Volume.
         */
        id: number;
    };
};
export type DetachVolumeResponse = (detach_volume_response);
export type DetachVolumeError = unknown;
export type ResizeVolumeData = {
    body?: resize_volume_request;
    path: {
        /**
         * ID of the Volume.
         */
        id: number;
    };
};
export type ResizeVolumeResponse = (resize_volume_response);
export type ResizeVolumeError = unknown;
export type ListVolumeActionsData = {
    query?: {
        /**
         * Filter the actions by ID. Can be used multiple times. The response will only contain
         * actions matching the specified IDs.
         *
         */
        id?: number;
        /**
         * Page number to return. For more information, see "[Pagination](#pagination)".
         */
        page?: number;
        /**
         * Maximum number of entries returned per page. For more information, see "[Pagination](#pagination)".
         */
        per_page?: number;
        /**
         * Sort actions by field and direction. Can be used multiple times. For more
         * information, see "[Sorting](#sorting)".
         *
         */
        sort?: 'id' | 'id:asc' | 'id:desc' | 'command' | 'command:asc' | 'command:desc' | 'status' | 'status:asc' | 'status:desc' | 'started' | 'started:asc' | 'started:desc' | 'finished' | 'finished:asc' | 'finished:desc';
        /**
         * Filter the actions by status. Can be used multiple times. The response will only
         * contain actions matching the specified statuses.
         *
         */
        status?: 'running' | 'success' | 'error';
    };
};
export type ListVolumeActionsResponse = (list_actions_response);
export type ListVolumeActionsError = unknown;
export type GetVolumeActionData = {
    path: {
        /**
         * ID of the Action
         */
        id: number;
    };
};
export type GetVolumeActionResponse = (get_action_response);
export type GetVolumeActionError = unknown;
