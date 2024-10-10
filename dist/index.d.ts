import * as clientGenerated from './client/index.js';
/**
 * Create a instance of the client.
 * @param apiKey API Key
 * @param baseURL HCloud API Base URL
 * @returns Hey-API Client
 */
export declare function HCloudClient(apiKey: string, baseURL?: string): {
    actionSchema: {
        readonly properties: {
            readonly command: {
                readonly description: "Command executed in the Action.";
                readonly example: "start_resource";
                readonly type: "string";
            };
            readonly error: {
                readonly $ref: "#/components/schemas/error";
            };
            readonly finished: {
                readonly description: "Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Action";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly progress: {
                readonly description: "Progress of the Action in percent.";
                readonly example: 100;
                readonly format: "int32";
                readonly type: "integer";
            };
            readonly resources: {
                readonly description: "Resources the Action relates to.";
                readonly items: {
                    readonly $ref: "#/components/schemas/resource";
                };
                readonly type: "array";
            };
            readonly started: {
                readonly description: "Point in time when the Action was started (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly status: {
                readonly description: "Status of the Action.";
                readonly enum: readonly ["error", "running", "success"];
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "command", "status", "progress", "started", "finished", "resources", "error"];
        readonly title: "Action";
        readonly type: "object";
        readonly description: "Actions show the results and progress of asynchronous requests to the API.";
    };
    action_optionalSchema: {
        readonly nullable: true;
        readonly properties: {
            readonly command: {
                readonly description: "Command executed in the Action.";
                readonly example: "start_resource";
                readonly type: "string";
            };
            readonly error: {
                readonly $ref: "#/components/schemas/error";
            };
            readonly finished: {
                readonly description: "Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Action";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly progress: {
                readonly description: "Progress of the Action in percent.";
                readonly example: 100;
                readonly format: "int32";
                readonly type: "integer";
            };
            readonly resources: {
                readonly description: "Resources the Action relates to.";
                readonly items: {
                    readonly $ref: "#/components/schemas/resource";
                };
                readonly type: "array";
            };
            readonly started: {
                readonly description: "Point in time when the Action was started (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly status: {
                readonly description: "Status of the Action.";
                readonly enum: readonly ["error", "running", "success"];
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "command", "status", "progress", "started", "finished", "resources", "error"];
        readonly title: "ActionNullable";
        readonly type: "object";
        readonly description: "Actions show the results and progress of asynchronous requests to the API.";
    };
    add_route_to_network_requestSchema: {
        readonly $ref: "#/components/schemas/route";
    };
    add_route_to_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_route";
    };
    add_server_to_placement_group_requestSchema: {
        readonly properties: {
            readonly placement_group: {
                readonly description: "ID of Placement Group the Server should be added to";
                readonly example: 1;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly required: readonly ["placement_group"];
        readonly title: "AddToPlacementGroupRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/add_to_placement_group";
    };
    add_server_to_placement_group_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/add_to_placement_group";
    };
    add_service_requestSchema: {
        readonly $ref: "#/components/schemas/load_balancer_service";
    };
    add_service_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/add_service";
    };
    add_subnet_to_network_requestSchema: {
        readonly $ref: "#/components/schemas/subnet";
    };
    add_subnet_to_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_subnet";
    };
    add_target_requestSchema: {
        readonly properties: {
            readonly ip: {
                readonly description: "IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type \"ip\".";
                readonly properties: {
                    readonly ip: {
                        readonly description: "IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.";
                        readonly example: "203.0.113.1";
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["ip"];
                readonly title: "LoadBalancerTargetIP";
                readonly type: "object";
            };
            readonly label_selector: {
                readonly $ref: "#/components/schemas/label_selector";
            };
            readonly server: {
                readonly additionalProperties: false;
                readonly description: "Configuration for type Server, required if type is `server`";
                readonly properties: {
                    readonly id: {
                        readonly description: "ID of the Server";
                        readonly example: 80;
                        readonly format: "int64";
                        readonly type: "integer";
                        readonly maximum: 9007199254740991;
                    };
                };
                readonly required: readonly ["id"];
                readonly type: "object";
            };
            readonly type: {
                readonly description: "Type of the resource";
                readonly enum: readonly ["ip", "label_selector", "server"];
                readonly type: "string";
            };
            readonly use_private_ip: {
                readonly default: false;
                readonly description: "Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the same network.";
                readonly example: true;
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["type"];
        readonly title: "AddTargetRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/add_target";
    };
    add_target_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/add_target";
    };
    apply_to_resources_requestSchema: {
        readonly properties: {
            readonly apply_to: {
                readonly description: "Resources the Firewall should be applied to";
                readonly items: {
                    readonly $ref: "#/components/schemas/firewall_resource";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["apply_to"];
        readonly title: "ApplyToResourcesRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/apply_to_resources";
    };
    apply_to_resources_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["actions"];
        readonly title: "ActionListResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/apply_to_resources";
    };
    architectureSchema: {
        readonly description: "Type of cpu architecture this image is compatible with. | Type of cpu architecture";
        readonly enum: readonly ["arm", "x86"];
        readonly example: "x86";
        readonly type: "string";
    };
    architecture_optionalSchema: {
        readonly description: "Type of cpu architecture this iso is compatible with. Null indicates no restriction on the architecture (wildcard).";
        readonly enum: readonly ["arm", "x86"];
        readonly example: "x86";
        readonly nullable: true;
        readonly type: "string";
    };
    assign_floating_ip_to_server_requestSchema: {
        readonly description: "Request for POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/assign";
        readonly properties: {
            readonly server: {
                readonly description: "[Server](#servers) the [Floating IP](#floating-ips) is assigned to.\n\n`null` if not assigned.\n";
                readonly example: 42;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
        };
        readonly required: readonly ["server"];
        readonly title: "FloatingIPActionsAssignRequest";
        readonly type: "object";
    };
    assign_floating_ip_to_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/assign";
    };
    assign_primary_ip_to_resource_requestSchema: {
        readonly properties: {
            readonly assignee_id: {
                readonly description: "ID of a resource of type `assignee_type`";
                readonly example: 4711;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly assignee_type: {
                readonly description: "Type of resource assigning the Primary IP to";
                readonly enum: readonly ["server"];
                readonly example: "server";
                readonly type: "string";
            };
        };
        readonly required: readonly ["assignee_type", "assignee_id"];
        readonly title: "AssignPrimaryIPRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/assign";
    };
    assign_primary_ip_to_resource_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/assign";
    };
    attach_iso_to_server_requestSchema: {
        readonly properties: {
            readonly iso: {
                readonly description: "ID or name of ISO to attach to the Server as listed in GET `/isos`";
                readonly example: "FreeBSD-11.0-RELEASE-amd64-dvd1";
                readonly type: "string";
            };
        };
        readonly required: readonly ["iso"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/attach_iso";
    };
    attach_iso_to_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/attach_iso";
    };
    attach_load_balancer_to_network_requestSchema: {
        readonly properties: {
            readonly ip: {
                readonly description: "IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address";
                readonly example: "10.0.1.1";
                readonly type: "string";
            };
            readonly network: {
                readonly description: "ID of an existing network to attach the Load Balancer to";
                readonly example: 4711;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly required: readonly ["network"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/attach_to_network";
    };
    attach_load_balancer_to_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/attach_to_network";
    };
    attach_server_to_network_requestSchema: {
        readonly properties: {
            readonly alias_ips: {
                readonly description: "Additional IPs to be assigned to this Server";
                readonly example: readonly ["10.0.1.2"];
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
            readonly ip: {
                readonly description: "IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address";
                readonly example: "10.0.1.1";
                readonly type: "string";
            };
            readonly network: {
                readonly description: "ID of an existing network to attach the Server to";
                readonly example: 4711;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly required: readonly ["network"];
        readonly title: "AttachToNetworkRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/attach_to_network";
    };
    attach_server_to_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/attach_to_network";
    };
    attach_volume_to_server_requestSchema: {
        readonly properties: {
            readonly automount: {
                readonly description: "Auto-mount the Volume after attaching it";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly server: {
                readonly description: "ID of the Server the Volume will be attached to";
                readonly example: 43;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly required: readonly ["server"];
        readonly title: "AttachVolumeRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/volumes/{id}/actions/attach";
    };
    attach_volume_to_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/attach";
    };
    certificateSchema: {
        readonly properties: {
            readonly certificate: {
                readonly description: "Certificate and chain in PEM format, in order so that each record directly certifies the one preceding";
                readonly example: "-----BEGIN CERTIFICATE-----\n...";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly created: {
                readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly domain_names: {
                readonly description: "Domains and subdomains covered by the Certificate";
                readonly example: readonly ["example.com", "webmail.example.com", "www.example.com"];
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
            readonly fingerprint: {
                readonly description: "SHA256 fingerprint of the Certificate";
                readonly example: "03:c7:55:9b:2a:d1:04:17:09:f6:d0:7f:18:34:63:d4:3e:5f";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Certificate.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the Resource. Must be unique per Project.";
                readonly example: "my-resource";
                readonly type: "string";
            };
            readonly not_valid_after: {
                readonly description: "Point in time when the Certificate stops being valid (in ISO-8601 format)";
                readonly example: "2019-07-08T09:59:59+00:00";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly not_valid_before: {
                readonly description: "Point in time when the Certificate becomes valid (in ISO-8601 format)";
                readonly example: "2019-01-08T10:00:00+00:00";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly status: {
                readonly description: "Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates";
                readonly nullable: true;
                readonly properties: {
                    readonly error: {
                        readonly description: "If issuance or renewal reports `failed`, this property contains information about what happened";
                        readonly example: null;
                        readonly nullable: true;
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly message: {
                                readonly type: "string";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly issuance: {
                        readonly description: "Status of the issuance process of the Certificate";
                        readonly enum: readonly ["completed", "failed", "pending"];
                        readonly example: "completed";
                        readonly type: "string";
                    };
                    readonly renewal: {
                        readonly description: "Status of the renewal process of the Certificate.";
                        readonly enum: readonly ["failed", "pending", "scheduled", "unavailable"];
                        readonly example: "scheduled";
                        readonly type: "string";
                    };
                };
                readonly type: "object";
            };
            readonly type: {
                readonly description: "Type of the Certificate";
                readonly enum: readonly ["managed", "uploaded"];
                readonly example: "uploaded";
                readonly type: "string";
            };
            readonly used_by: {
                readonly description: "Resources currently using the Certificate";
                readonly items: {
                    readonly $ref: "#/components/schemas/resource";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["id", "name", "labels", "certificate", "created", "not_valid_before", "not_valid_after", "domain_names", "fingerprint", "used_by"];
        readonly title: "Certificate";
        readonly type: "object";
        readonly description: "TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.";
    };
    change_algorithm_requestSchema: {
        readonly $ref: "#/components/schemas/load_balancer_algorithm";
    };
    change_algorithm_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_algorithm";
    };
    change_alias_ips_of_network_requestSchema: {
        readonly properties: {
            readonly alias_ips: {
                readonly description: "New alias IPs to set for this Server";
                readonly example: readonly ["10.0.1.2"];
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
            readonly network: {
                readonly description: "ID of an existing Network already attached to the Server";
                readonly example: 4711;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly required: readonly ["network", "alias_ips"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_alias_ips";
    };
    change_alias_ips_of_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_alias_ips";
    };
    change_floating_ip_protection_requestSchema: {
        readonly $ref: "#/components/schemas/protection";
    };
    change_floating_ip_protection_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/change_protection";
    };
    change_image_protection_requestSchema: {
        readonly properties: {
            readonly delete: {
                readonly description: "If true, prevents the snapshot from being deleted";
                readonly example: true;
                readonly type: "boolean";
            };
        };
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/images/{id}/actions/change_protection";
    };
    change_image_protection_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/images/{id}/actions/change_protection";
    };
    change_ip_range_of_network_requestSchema: {
        readonly properties: {
            readonly ip_range: {
                readonly description: "IP range in CIDR block notation of the whole network.\n\nMust span all included subnets. Must be one of the private IPv4 ranges of RFC1918.\n\nMinimum network size is /24. We highly recommend that you pick a larger network with a /16 netmask.\n";
                readonly example: "10.0.0.0/16";
                readonly type: "string";
            };
        };
        readonly required: readonly ["ip_range"];
        readonly title: "ChangeIPRangeRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/change_ip_range";
    };
    change_ip_range_of_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/change_ip_range";
    };
    change_load_balancer_protection_requestSchema: {
        readonly properties: {
            readonly delete: {
                readonly description: "If true, prevents the Load Balancer from being deleted";
                readonly example: true;
                readonly type: "boolean";
            };
        };
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_protection";
    };
    change_load_balancer_protection_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_protection";
    };
    change_network_protection_requestSchema: {
        readonly properties: {
            readonly delete: {
                readonly description: "If true, prevents the Network from being deleted";
                readonly example: true;
                readonly type: "boolean";
            };
        };
        readonly title: "ChangeProtectionRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/change_protection";
    };
    change_network_protection_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/change_protection";
    };
    change_primary_ip_protection_requestSchema: {
        readonly properties: {
            readonly delete: {
                readonly description: "If true, prevents the Primary IP from being deleted";
                readonly example: true;
                readonly type: "boolean";
            };
        };
        readonly title: "ChangeProtectionRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_protection";
    };
    change_primary_ip_protection_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_protection";
    };
    change_reverse_dns_entry_for_primary_ip_requestSchema: {
        readonly properties: {
            readonly dns_ptr: {
                readonly description: "Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`";
                readonly example: "server02.example.com";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly ip: {
                readonly description: "IP address for which to set the reverse DNS entry";
                readonly example: "1.2.3.4";
                readonly type: "string";
            };
        };
        readonly required: readonly ["ip", "dns_ptr"];
        readonly title: "ChangeDNSPTRRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_dns_ptr";
    };
    change_reverse_dns_entry_for_primary_ip_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/change_dns_ptr";
    };
    change_reverse_dns_entry_for_this_load_balancer_requestSchema: {
        readonly properties: {
            readonly dns_ptr: {
                readonly description: "Hostname to set as a reverse DNS PTR entry";
                readonly example: "lb1.example.com";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly ip: {
                readonly description: "Public IP address for which the reverse DNS entry should be set";
                readonly example: "1.2.3.4";
                readonly type: "string";
            };
        };
        readonly required: readonly ["ip", "dns_ptr"];
        readonly title: "ChangeLoadbalancerDnsPtrRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_dns_ptr";
    };
    change_reverse_dns_entry_for_this_load_balancer_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_dns_ptr";
    };
    change_reverse_dns_entry_for_this_server_requestSchema: {
        readonly properties: {
            readonly dns_ptr: {
                readonly description: "Hostname to set as a reverse DNS PTR entry, reset to original value if `null`";
                readonly example: "server01.example.com";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly ip: {
                readonly description: "Primary IP address for which the reverse DNS entry should be set";
                readonly example: "1.2.3.4";
                readonly type: "string";
            };
        };
        readonly required: readonly ["ip", "dns_ptr"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_dns_ptr";
    };
    change_reverse_dns_entry_for_this_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_dns_ptr";
    };
    change_reverse_dns_records_for_floating_ip_requestSchema: {
        readonly $ref: "#/components/schemas/dns_ptr";
    };
    change_reverse_dns_records_for_floating_ip_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/change_dns_ptr";
    };
    change_server_protection_requestSchema: {
        readonly properties: {
            readonly delete: {
                readonly description: "If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value)";
                readonly example: true;
                readonly type: "boolean";
            };
            readonly rebuild: {
                readonly description: "If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value)";
                readonly example: true;
                readonly type: "boolean";
            };
        };
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_protection";
    };
    change_server_protection_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_protection";
    };
    change_type_of_load_balancer_requestSchema: {
        readonly properties: {
            readonly load_balancer_type: {
                readonly description: "ID or name of Load Balancer type the Load Balancer should migrate to";
                readonly example: "lb21";
                readonly type: "string";
            };
        };
        readonly required: readonly ["load_balancer_type"];
        readonly title: "ChangeTypeRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_type";
    };
    change_type_of_load_balancer_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/change_type";
    };
    change_type_of_server_requestSchema: {
        readonly properties: {
            readonly server_type: {
                readonly description: "ID or name of Server type the Server should migrate to";
                readonly example: "cx11";
                readonly type: "string";
            };
            readonly upgrade_disk: {
                readonly description: "If false, do not upgrade the disk (this allows downgrading the Server type later)";
                readonly example: true;
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["upgrade_disk", "server_type"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_type";
    };
    change_type_of_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/change_type";
    };
    change_volume_protection_requestSchema: {
        readonly properties: {
            readonly delete: {
                readonly description: "If true, prevents the Volume from being deleted";
                readonly example: true;
                readonly type: "boolean";
            };
        };
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/volumes/{id}/actions/change_protection";
    };
    change_volume_protection_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/change_protection";
    };
    create_certificate_requestSchema: {
        readonly properties: {
            readonly certificate: {
                readonly description: "Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates.";
                readonly example: "-----BEGIN CERTIFICATE-----\n...";
                readonly type: "string";
            };
            readonly domain_names: {
                readonly description: "Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed` Certificates.";
                readonly example: null;
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the Certificate";
                readonly example: "my website cert";
                readonly type: "string";
            };
            readonly private_key: {
                readonly description: "Certificate key in PEM format. Required for type `uploaded` Certificates.";
                readonly example: "-----BEGIN PRIVATE KEY-----\n...";
                readonly type: "string";
            };
            readonly type: {
                readonly default: "uploaded";
                readonly description: "Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate.";
                readonly enum: readonly ["managed", "uploaded"];
                readonly example: "uploaded";
                readonly type: "string";
            };
        };
        readonly required: readonly ["name"];
        readonly title: "CreateCertificateRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/certificates";
    };
    create_certificate_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action_optional";
            };
            readonly certificate: {
                readonly $ref: "#/components/schemas/certificate";
            };
        };
        readonly required: readonly ["certificate"];
        readonly title: "CreateCertificateResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/certificates";
    };
    create_firewall_requestSchema: {
        readonly properties: {
            readonly apply_to: {
                readonly description: "Resources the Firewall should be applied to after creation";
                readonly items: {
                    readonly $ref: "#/components/schemas/firewall_resource";
                };
                readonly type: "array";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the Firewall.\n\nLimited to a maximum of 128 characters.\n";
                readonly example: "Corporate Intranet Protection";
                readonly type: "string";
            };
            readonly rules: {
                readonly description: "Array of rules.\n\nLimited to a maximum of 50 rules per Firewall.\n";
                readonly example: readonly [{
                    readonly direction: "in";
                    readonly port: "80";
                    readonly protocol: "tcp";
                    readonly source_ips: readonly ["28.239.13.1/32", "28.239.14.0/24", "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"];
                }];
                readonly items: {
                    readonly $ref: "#/components/schemas/rule";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["name"];
        readonly title: "CreateFirewallRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/firewalls";
    };
    create_firewall_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly example: readonly [{
                    readonly command: "set_firewall_rules";
                    readonly error: {
                        readonly code: "action_failed";
                        readonly message: "Action failed";
                    };
                    readonly finished: "2016-01-30T23:56:00+00:00";
                    readonly id: 13;
                    readonly progress: 100;
                    readonly resources: readonly [{
                        readonly id: 38;
                        readonly type: "firewall";
                    }];
                    readonly started: "2016-01-30T23:55:00+00:00";
                    readonly status: "success";
                }, {
                    readonly command: "apply_firewall";
                    readonly error: {
                        readonly code: "action_failed";
                        readonly message: "Action failed";
                    };
                    readonly finished: "2016-01-30T23:56:00+00:00";
                    readonly id: 14;
                    readonly progress: 100;
                    readonly resources: readonly [{
                        readonly id: 42;
                        readonly type: "server";
                    }, {
                        readonly id: 38;
                        readonly type: "firewall";
                    }];
                    readonly started: "2016-01-30T23:55:00+00:00";
                    readonly status: "success";
                }];
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly firewall: {
                readonly $ref: "#/components/schemas/firewall";
            };
        };
        readonly title: "CreateFirewallResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/firewalls";
    };
    create_floating_ip_requestSchema: {
        readonly properties: {
            readonly description: {
                readonly description: "Description of the Resource.";
                readonly example: "This describes my resource";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly home_location: {
                readonly description: "Home [Location](#locations) for the [Floating IP](#floating-ips).\n\nEither the ID or the name of the [Location](#locations).\n\nOnly optional if no [Server](#servers) is provided. Routing is optimized for this [Locations](#locations).\n";
                readonly example: "fsn1";
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the Resource. Must be unique per Project.";
                readonly example: "my-resource";
                readonly type: "string";
            };
            readonly server: {
                readonly description: "[Server](#servers) the [Floating IP](#floating-ips) is assigned to.\n\n`null` if not assigned.\n";
                readonly example: 42;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly type: {
                readonly $ref: "#/components/schemas/ip_type";
            };
        };
        readonly required: readonly ["type"];
        readonly title: "FloatingIPCreateRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/floating_ips";
    };
    create_floating_ip_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly floating_ip: {
                readonly $ref: "#/components/schemas/floating_ip";
            };
        };
        readonly required: readonly ["floating_ip"];
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/floating_ips";
    };
    create_image_from_server_requestSchema: {
        readonly properties: {
            readonly description: {
                readonly description: "Description of the Image, will be auto-generated if not set";
                readonly example: "my image";
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly type: {
                readonly default: "snapshot";
                readonly description: "Type of Image to create.";
                readonly enum: readonly ["backup", "snapshot"];
                readonly example: "snapshot";
                readonly type: "string";
            };
        };
        readonly title: "CreateImageRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/create_image";
    };
    create_image_from_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly image: {
                readonly $ref: "#/components/schemas/image";
            };
        };
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/create_image";
    };
    create_load_balancer_requestSchema: {
        readonly properties: {
            readonly algorithm: {
                readonly $ref: "#/components/schemas/load_balancer_algorithm";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly load_balancer_type: {
                readonly description: "ID or name of the Load Balancer type this Load Balancer should be created with";
                readonly example: "lb11";
                readonly type: "string";
            };
            readonly location: {
                readonly description: "ID or name of Location to create Load Balancer in";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "Name of the Load Balancer";
                readonly example: "Web Frontend";
                readonly type: "string";
            };
            readonly network: {
                readonly description: "ID of the network the Load Balancer should be attached to on creation";
                readonly example: 123;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly network_zone: {
                readonly description: "Name of network zone";
                readonly example: "eu-central";
                readonly type: "string";
            };
            readonly public_interface: {
                readonly description: "Enable or disable the public interface of the Load Balancer";
                readonly example: true;
                readonly type: "boolean";
            };
            readonly services: {
                readonly description: "Array of services";
                readonly items: {
                    readonly $ref: "#/components/schemas/load_balancer_service";
                };
                readonly type: "array";
            };
            readonly targets: {
                readonly description: "Array of targets";
                readonly items: {
                    readonly $ref: "#/components/schemas/target";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["name", "load_balancer_type"];
        readonly title: "CreateLoadBalancerRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/load_balancers";
    };
    create_load_balancer_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly load_balancer: {
                readonly $ref: "#/components/schemas/load_balancer";
            };
        };
        readonly required: readonly ["load_balancer", "action"];
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers";
    };
    create_network_requestSchema: {
        readonly properties: {
            readonly expose_routes_to_vswitch: {
                readonly description: "Toggle to expose routes to the networks vSwitch.\n\nIndicates if the routes from this network should be exposed to the vSwitch in this network. Only takes effect if a vSwitch is setup in this network.\n";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly ip_range: {
                readonly description: "IP range in CIDR block notation of the whole network.\n\nMust span all included subnets. Must be one of the private IPv4 ranges of RFC1918.\n\nMinimum network size is /24. We highly recommend that you pick a larger network with a /16 netmask.\n";
                readonly example: "10.0.0.0/16";
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the network";
                readonly example: "mynet";
                readonly type: "string";
            };
            readonly routes: {
                readonly description: "Array of routes set in this network.";
                readonly items: {
                    readonly $ref: "#/components/schemas/route";
                };
                readonly type: "array";
            };
            readonly subnets: {
                readonly description: "Array of subnets allocated.";
                readonly items: {
                    readonly $ref: "#/components/schemas/subnet";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["name", "ip_range"];
        readonly title: "NetworkCreateRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/networks";
    };
    create_network_responseSchema: {
        readonly properties: {
            readonly network: {
                readonly $ref: "#/components/schemas/network";
            };
        };
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/networks";
    };
    create_placementgroup_requestSchema: {
        readonly properties: {
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the PlacementGroup";
                readonly example: "my Placement Group";
                readonly type: "string";
            };
            readonly type: {
                readonly description: "Define the Placement Group Type.";
                readonly enum: readonly ["spread"];
                readonly example: "spread";
                readonly type: "string";
            };
        };
        readonly required: readonly ["name", "type"];
        readonly title: "CreatePlacementGroupRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/placement_groups";
    };
    create_placementgroup_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action_optional";
            };
            readonly placement_group: {
                readonly properties: {
                    readonly created: {
                        readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                        readonly example: "2016-01-30T23:55:00+00:00";
                        readonly type: "string";
                    };
                    readonly id: {
                        readonly description: "ID of the Placement Group.";
                        readonly example: 42;
                        readonly format: "int64";
                        readonly maximum: 9007199254740991;
                        readonly type: "integer";
                    };
                    readonly labels: {
                        readonly $ref: "#/components/schemas/labels";
                    };
                    readonly name: {
                        readonly description: "Name of the Resource. Must be unique per Project.";
                        readonly example: "my-resource";
                        readonly type: "string";
                    };
                    readonly servers: {
                        readonly description: "Array of IDs of Servers that are part of this Placement Group";
                        readonly example: readonly [42];
                        readonly items: {
                            readonly format: "int64";
                            readonly type: "integer";
                        };
                        readonly type: "array";
                    };
                    readonly type: {
                        readonly description: "Type of the Placement Group";
                        readonly enum: readonly ["spread"];
                        readonly example: "spread";
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["id", "name", "labels", "type", "created", "servers"];
                readonly title: "PlacementGroup";
                readonly type: "object";
            };
        };
        readonly required: readonly ["placement_group"];
        readonly title: "CreatePlacementGroupResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/placement_groups";
    };
    create_primary_ip_requestSchema: {
        readonly properties: {
            readonly assignee_id: {
                readonly description: "ID of the resource the Primary IP should be assigned to. Omitted if it should not be assigned.";
                readonly example: 17;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly assignee_type: {
                readonly description: "Resource type the Primary IP can be assigned to";
                readonly enum: readonly ["server"];
                readonly example: "server";
                readonly type: "string";
            };
            readonly auto_delete: {
                readonly default: false;
                readonly description: "Delete the Primary IP when the Server it is assigned to is deleted.";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly datacenter: {
                readonly description: "ID or name of Datacenter the Primary IP will be bound to. Needs to be omitted if `assignee_id` is passed.";
                readonly example: "fsn1-dc8";
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly example: "my-ip";
                readonly type: "string";
            };
            readonly type: {
                readonly $ref: "#/components/schemas/ip_type";
            };
        };
        readonly required: readonly ["name", "type", "assignee_type"];
        readonly title: "CreatePrimaryIPRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/primary_ips";
    };
    create_primary_ip_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly primary_ip: {
                readonly properties: {
                    readonly assignee_id: {
                        readonly description: "ID of the resource the Primary IP is assigned to, null if it is not assigned at all";
                        readonly example: 17;
                        readonly format: "int64";
                        readonly nullable: true;
                        readonly type: "integer";
                    };
                    readonly assignee_type: {
                        readonly description: "Resource type the Primary IP can be assigned to";
                        readonly enum: readonly ["server"];
                        readonly type: "string";
                    };
                    readonly auto_delete: {
                        readonly description: "Delete this Primary IP when the resource it is assigned to is deleted";
                        readonly example: true;
                        readonly type: "boolean";
                    };
                    readonly blocked: {
                        readonly description: "Whether the IP is blocked";
                        readonly example: false;
                        readonly type: "boolean";
                    };
                    readonly created: {
                        readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                        readonly example: "2016-01-30T23:55:00+00:00";
                        readonly type: "string";
                    };
                    readonly datacenter: {
                        readonly $ref: "#/components/schemas/datacenter";
                    };
                    readonly dns_ptr: {
                        readonly description: "Array of reverse DNS entries";
                        readonly items: {
                            readonly $ref: "#/components/schemas/dns_ptr";
                        };
                        readonly type: "array";
                    };
                    readonly id: {
                        readonly description: "ID of the Primary IP.";
                        readonly example: 42;
                        readonly format: "int64";
                        readonly maximum: 9007199254740991;
                        readonly type: "integer";
                    };
                    readonly ip: {
                        readonly description: "IP address.";
                        readonly example: "131.232.99.1";
                        readonly type: "string";
                    };
                    readonly labels: {
                        readonly $ref: "#/components/schemas/labels";
                    };
                    readonly name: {
                        readonly description: "Name of the Resource. Must be unique per Project.";
                        readonly example: "my-resource";
                        readonly type: "string";
                    };
                    readonly protection: {
                        readonly $ref: "#/components/schemas/protection";
                    };
                    readonly type: {
                        readonly $ref: "#/components/schemas/ip_type";
                    };
                };
                readonly required: readonly ["id", "name", "labels", "created", "blocked", "datacenter", "ip", "dns_ptr", "protection", "type", "auto_delete", "assignee_type", "assignee_id"];
                readonly title: "PrimaryIP";
                readonly type: "object";
            };
        };
        readonly required: readonly ["primary_ip"];
        readonly title: "CreatePrimaryIPResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/primary_ips";
    };
    create_server_requestSchema: {
        readonly properties: {
            readonly automount: {
                readonly description: "Auto-mount Volumes after attach";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly datacenter: {
                readonly description: "ID or name of Datacenter to create Server in (must not be used together with location)";
                readonly example: "nbg1-dc3";
                readonly type: "string";
            };
            readonly firewalls: {
                readonly description: "Firewalls which should be applied on the Server's public network interface at creation time";
                readonly example: readonly [{
                    readonly firewall: 38;
                }];
                readonly items: {
                    readonly properties: {
                        readonly firewall: {
                            readonly description: "ID of the Firewall";
                            readonly format: "int64";
                            readonly type: "integer";
                        };
                    };
                    readonly required: readonly ["firewall"];
                    readonly type: "object";
                    readonly title: "CreateServerRequestFirewalls";
                };
                readonly type: "array";
            };
            readonly image: {
                readonly description: "ID or name of the Image the Server is created from";
                readonly example: "ubuntu-20.04";
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly location: {
                readonly description: "ID or name of Location to create Server in (must not be used together with datacenter)";
                readonly example: "nbg1";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)";
                readonly example: "my-server";
                readonly type: "string";
            };
            readonly networks: {
                readonly description: "Network IDs which should be attached to the Server private network interface at the creation time";
                readonly example: readonly [456];
                readonly items: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly type: "array";
            };
            readonly placement_group: {
                readonly description: "ID of the Placement Group the server should be in";
                readonly example: 1;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly public_net: {
                readonly description: "Public Network options";
                readonly properties: {
                    readonly enable_ipv4: {
                        readonly default: true;
                        readonly description: "Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached.";
                        readonly type: "boolean";
                    };
                    readonly enable_ipv6: {
                        readonly default: true;
                        readonly description: "Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached.";
                        readonly type: "boolean";
                    };
                    readonly ipv4: {
                        readonly description: "ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4 Primary IP will automatically be created.";
                        readonly nullable: true;
                        readonly type: "integer";
                    };
                    readonly ipv6: {
                        readonly description: "ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6 Primary IP will automatically be created.";
                        readonly nullable: true;
                        readonly type: "integer";
                    };
                };
                readonly type: "object";
            };
            readonly server_type: {
                readonly description: "ID or name of the Server type this Server should be created with";
                readonly example: "cx11";
                readonly type: "string";
            };
            readonly ssh_keys: {
                readonly description: "SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time";
                readonly example: readonly ["my-ssh-key"];
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
            readonly start_after_create: {
                readonly default: true;
                readonly description: "This automatically triggers a [Power on a Server-Server Action](#server-actions-power-on-a-server) after the creation is finished and is returned in the `next_actions` response object.";
                readonly example: true;
                readonly type: "boolean";
            };
            readonly user_data: {
                readonly description: "Cloud-Init user data to use during Server creation. This field is limited to 32KiB.";
                readonly example: "#cloud-config\nruncmd:\n- [touch, /root/cloud-init-worked]\n";
                readonly type: "string";
            };
            readonly volumes: {
                readonly description: "Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.";
                readonly example: readonly [123];
                readonly items: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["name", "server_type", "image"];
        readonly title: "CreateServerRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers";
    };
    create_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly next_actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly root_password: {
                readonly description: "Root password when no SSH keys have been specified";
                readonly example: "YItygq1v3GYjjMomLaKc";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly server: {
                readonly $ref: "#/components/schemas/server";
            };
        };
        readonly required: readonly ["server", "action", "next_actions", "root_password"];
        readonly title: "CreateServerResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers";
    };
    create_ssh_key_requestSchema: {
        readonly properties: {
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the SSH key";
                readonly example: "My ssh key";
                readonly type: "string";
            };
            readonly public_key: {
                readonly description: "Public key";
                readonly example: "ssh-rsa AAAjjk76kgf...Xt";
                readonly type: "string";
            };
        };
        readonly required: readonly ["name", "public_key"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/ssh_keys";
    };
    create_ssh_key_responseSchema: {
        readonly properties: {
            readonly ssh_key: {
                readonly $ref: "#/components/schemas/ssh_key";
            };
        };
        readonly required: readonly ["ssh_key"];
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/ssh_keys";
    };
    create_volume_requestSchema: {
        readonly properties: {
            readonly automount: {
                readonly description: "Auto-mount Volume after attach. `server` must be provided.";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly format: {
                readonly description: "Format Volume after creation. One of: `xfs`, `ext4`";
                readonly example: "xfs";
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly location: {
                readonly description: "Location to create the Volume in (can be omitted if Server is specified)";
                readonly example: "nbg1";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "Name of the volume";
                readonly example: "databases-storage";
                readonly type: "string";
            };
            readonly server: {
                readonly description: "Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server)";
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly size: {
                readonly description: "Size of the Volume in GB";
                readonly example: 42;
                readonly type: "integer";
            };
        };
        readonly required: readonly ["size", "name"];
        readonly title: "CreateVolumeRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/volumes";
    };
    create_volume_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly next_actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly volume: {
                readonly $ref: "#/components/schemas/volume";
            };
        };
        readonly required: readonly ["volume", "action", "next_actions"];
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/volumes";
    };
    created_fromSchema: {
        readonly description: "Information about the Server the Image was created from";
        readonly nullable: true;
        readonly properties: {
            readonly id: {
                readonly description: "ID of the Server the Image was created from";
                readonly example: 1;
                readonly format: "int64";
                readonly type: "integer";
                readonly maximum: 9007199254740991;
            };
            readonly name: {
                readonly description: "Server name at the time the Image was created";
                readonly example: "Server";
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "name"];
        readonly type: "object";
    };
    datacenterSchema: {
        readonly properties: {
            readonly description: {
                readonly description: "Descriptive name for the [Datacenter](#datacenters).\n\nDesired to be easy to understand for humans. Might be changed for cosmetic reasons. Do not use this as an identifier.\n";
                readonly example: "Falkenstein DC Park 8";
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Datacenter.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly location: {
                readonly $ref: "#/components/schemas/location";
            };
            readonly name: {
                readonly description: "Unique name for the [Datacenter](#datacenters).\n\nCan be used as a more descriptive identifier.\n";
                readonly example: "fsn1-dc8";
                readonly pattern: "^[a-z0-9]+(-?[a-z0-9]*)*$";
                readonly type: "string";
            };
            readonly server_types: {
                readonly description: "[Server Types](#server-types) supported and available in this [Datacenter](#datacenters).\n";
                readonly properties: {
                    readonly available: {
                        readonly description: "[Server Types](#server-types) currently available in this [Datacenter](#datacenters).\n\nThese [Server Types](#server-types) can currently be purchased. Types that are temporarily unavailable\nbut are supported in this [Datacenter](#datacenters) are listed as `supported`.\n";
                        readonly example: readonly [1, 2, 3];
                        readonly items: {
                            readonly format: "int64";
                            readonly type: "integer";
                        };
                        readonly type: "array";
                    };
                    readonly available_for_migration: {
                        readonly description: "[Server Types](#server-types) available to migrate to in this [Datacenter](#datacenters).\n\nExisting [Servers](#servers) can be migrated to these [Server Types](#server-types).\n";
                        readonly example: readonly [1, 2, 3];
                        readonly items: {
                            readonly format: "int64";
                            readonly type: "integer";
                        };
                        readonly type: "array";
                    };
                    readonly supported: {
                        readonly description: "List of [Server Types](#server-types) supported in this [Datacenter](#datacenters).\n\nThese [Server Types](#server-types) are generally available in this Datacenter, but might be\ntemporarily out of stock.\n";
                        readonly example: readonly [1, 2, 3];
                        readonly items: {
                            readonly format: "int64";
                            readonly type: "integer";
                        };
                        readonly type: "array";
                    };
                };
                readonly required: readonly ["supported", "available", "available_for_migration"];
                readonly type: "object";
            };
        };
        readonly required: readonly ["id", "name", "description", "location", "server_types"];
        readonly type: "object";
        readonly description: "Datacenter this Primary IP is located at | Datacenter this Resource is located at";
    };
    delete_route_from_network_requestSchema: {
        readonly $ref: "#/components/schemas/route";
    };
    delete_route_from_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_route";
    };
    delete_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly type: "object";
        readonly description: "Response to DELETE https://api.hetzner.cloud/v1/servers/{id}";
    };
    delete_service_requestSchema: {
        readonly properties: {
            readonly listen_port: {
                readonly description: "The listen port of the service you want to delete";
                readonly example: 443;
                readonly type: "integer";
            };
        };
        readonly required: readonly ["listen_port"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/delete_service";
    };
    delete_service_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/delete_service";
    };
    delete_subnet_from_network_requestSchema: {
        readonly properties: {
            readonly ip_range: {
                readonly description: "IP range in CIDR block notation of the Subnet to delete.";
                readonly example: "10.0.1.0/24";
                readonly type: "string";
            };
        };
        readonly required: readonly ["ip_range"];
        readonly title: "DeleteSubnetRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_subnet";
    };
    delete_subnet_from_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_subnet";
    };
    deprecation_infoSchema: {
        readonly description: "Describes if, when and how the resource is deprecated. If this field is\nset to `null` the resource is not deprecated. If a value is set, it is\nconsidered deprecated.\n";
        readonly nullable: true;
        readonly properties: {
            readonly announced: {
                readonly description: "Date of the deprecation announcement.\n";
                readonly example: "2023-06-01T00:00:00+00:00";
                readonly format: "iso-8601";
                readonly type: "string";
            };
            readonly unavailable_after: {
                readonly description: "Date of the deprecated resource removal.\n\nOnce this date is reached, the resource will not be returned\nby resource type \"list\" endpoint, and the resource can not be\nused to create new resources. For example, if this is an\nimage, you can not create new servers with this image after\nthe mentioned date.\n";
                readonly example: "2023-09-01T00:00:00+00:00";
                readonly format: "iso-8601";
                readonly type: "string";
            };
        };
        readonly required: readonly ["unavailable_after", "announced"];
        readonly title: "DeprecationInfo";
        readonly type: "object";
    };
    detach_iso_from_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/detach_iso";
    };
    detach_load_balancer_from_network_requestSchema: {
        readonly properties: {
            readonly network: {
                readonly description: "ID of an existing network to detach the Load Balancer from";
                readonly example: 4711;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly required: readonly ["network"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/detach_from_network";
    };
    detach_load_balancer_from_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/detach_from_network";
    };
    detach_server_from_network_requestSchema: {
        readonly properties: {
            readonly network: {
                readonly description: "ID of an existing network to detach the Server from";
                readonly example: 4711;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly required: readonly ["network"];
        readonly title: "DetachFromNetworkRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/detach_from_network";
    };
    detach_server_from_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/detach_from_network";
    };
    detach_volume_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/detach";
    };
    disable_backups_for_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/disable_backup";
    };
    disable_public_interface_of_load_balancer_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/disable_public_interface";
    };
    disable_rescue_mode_for_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/disable_rescue";
    };
    dns_ptrSchema: {
        readonly properties: {
            readonly dns_ptr: {
                readonly description: "Domain Name to point to.\n\nPTR record content used for reverse DNS.\n | DNS pointer for the specific IP address";
                readonly example: "server.example.com";
                readonly type: "string";
            };
            readonly ip: {
                readonly description: "Single IPv4 or IPv6 address to create pointer for.\n | Single IPv4 or IPv6 address | Single IPv6 address of this Server for which the reverse DNS entry has been set up";
                readonly example: "2001:db8::1";
                readonly type: "string";
            };
        };
        readonly required: readonly ["ip", "dns_ptr"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/change_dns_ptr";
    };
    enable_and_configure_backups_for_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/enable_backup";
    };
    enable_public_interface_of_load_balancer_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/enable_public_interface";
    };
    enable_rescue_mode_for_server_requestSchema: {
        readonly properties: {
            readonly ssh_keys: {
                readonly description: "Array of SSH key IDs which should be injected into the rescue system.";
                readonly example: readonly [2323];
                readonly items: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly type: "array";
            };
            readonly type: {
                readonly default: "linux64";
                readonly description: "Type of rescue system to boot.";
                readonly enum: readonly ["linux64"];
                readonly type: "string";
            };
        };
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/enable_rescue";
    };
    enable_rescue_mode_for_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly root_password: {
                readonly description: "Password that will be set for this Server once the Action succeeds";
                readonly example: "zCWbFhnu950dUTko5f40";
                readonly type: "string";
            };
        };
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/enable_rescue";
    };
    errorSchema: {
        readonly description: "Error message for the Action if an error occurred, otherwise null.";
        readonly nullable: true;
        readonly properties: {
            readonly code: {
                readonly description: "Fixed error code for machines.";
                readonly example: "action_failed";
                readonly type: "string";
            };
            readonly message: {
                readonly description: "Error message for humans.";
                readonly example: "Action failed";
                readonly type: "string";
            };
        };
        readonly required: readonly ["code", "message"];
        readonly type: "object";
    };
    firewallSchema: {
        readonly properties: {
            readonly applied_to: {
                readonly items: {
                    readonly $ref: "#/components/schemas/firewall_resource_id";
                };
                readonly type: "array";
            };
            readonly created: {
                readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Firewall.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the Resource. Must be unique per Project.";
                readonly example: "my-resource";
                readonly type: "string";
            };
            readonly rules: {
                readonly items: {
                    readonly properties: {
                        readonly description: {
                            readonly description: "Description of the Rule";
                            readonly maxLength: 255;
                            readonly nullable: true;
                            readonly type: "string";
                        };
                        readonly destination_ips: {
                            readonly description: "List of permitted IPv4/IPv6 addresses for outgoing traffic (`direction` set to `out`)\nin [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR\nblocks at most.\n\nThe CIDR blocks may refer to networks (with empty host bits) or single hosts.\nFor example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,\nand a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.\nUse `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.\n";
                            readonly example: readonly [];
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly type: "array";
                        };
                        readonly direction: {
                            readonly description: "Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.";
                            readonly enum: readonly ["in", "out"];
                            readonly example: "in";
                            readonly type: "string";
                        };
                        readonly port: {
                            readonly description: "Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.";
                            readonly example: "80";
                            readonly nullable: true;
                            readonly type: "string";
                        };
                        readonly protocol: {
                            readonly description: "Type of traffic to allow";
                            readonly enum: readonly ["esp", "gre", "icmp", "tcp", "udp"];
                            readonly type: "string";
                        };
                        readonly source_ips: {
                            readonly description: "List of permitted IPv4/IPv6 addresses for incoming traffic (`direction` set to `in`)\nin [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR\nblocks at most.\n\nThe CIDR blocks may refer to networks (with empty host bits) or single hosts.\nFor example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,\nand a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.\nUse `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.\n";
                            readonly example: readonly ["28.239.13.1/32", "28.239.14.0/24", "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"];
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["direction", "protocol", "destination_ips", "source_ips", "port"];
                    readonly title: "RuleResponse";
                    readonly type: "object";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["id", "name", "created", "rules", "applied_to"];
        readonly title: "FirewallResponse";
        readonly type: "object";
        readonly description: "Firewalls can limit the network access to or from your resources.";
    };
    firewall_resourceSchema: {
        readonly properties: {
            readonly label_selector: {
                readonly $ref: "#/components/schemas/label_selector";
            };
            readonly server: {
                readonly $ref: "#/components/schemas/resource_id";
            };
            readonly type: {
                readonly description: "Type of the resource";
                readonly enum: readonly ["label_selector", "server"];
                readonly type: "string";
            };
        };
        readonly required: readonly ["type"];
        readonly type: "object";
        readonly description: "Resource a Firewall should be applied to.";
    };
    firewall_resource_idSchema: {
        readonly properties: {
            readonly applied_to_resources: {
                readonly items: {
                    readonly properties: {
                        readonly server: {
                            readonly $ref: "#/components/schemas/resource_id";
                        };
                        readonly type: {
                            readonly description: "Type of resource referenced";
                            readonly enum: readonly ["server"];
                            readonly example: "server";
                            readonly type: "string";
                        };
                    };
                    readonly type: "object";
                    readonly title: "FirewallResourceIdAppliedToResources";
                };
                readonly type: "array";
            };
            readonly label_selector: {
                readonly $ref: "#/components/schemas/label_selector";
            };
            readonly server: {
                readonly $ref: "#/components/schemas/resource_id";
            };
            readonly type: {
                readonly description: "Type of resource referenced";
                readonly enum: readonly ["label_selector", "server"];
                readonly example: "server";
                readonly type: "string";
            };
        };
        readonly required: readonly ["type"];
        readonly type: "object";
        readonly description: "Resource a Firewall should be applied to.";
    };
    floating_ipSchema: {
        readonly properties: {
            readonly blocked: {
                readonly description: "Indicates whether the [Floating IP](#floating-ips) is blocked.";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly created: {
                readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Description of the Resource.";
                readonly example: "This describes my resource";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly dns_ptr: {
                readonly description: "List of reverse DNS entries for the [Floating IP](#floating-ips)\n";
                readonly items: {
                    readonly $ref: "#/components/schemas/dns_ptr";
                };
                readonly type: "array";
            };
            readonly home_location: {
                readonly $ref: "#/components/schemas/location";
            };
            readonly id: {
                readonly description: "ID of the Floating IP.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly ip: {
                readonly description: "IP address.";
                readonly example: "131.232.99.1";
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the Resource. Must be unique per Project.";
                readonly example: "my-resource";
                readonly type: "string";
            };
            readonly protection: {
                readonly $ref: "#/components/schemas/protection";
            };
            readonly server: {
                readonly description: "[Server](#servers) the [Floating IP](#floating-ips) is assigned to.\n\n`null` if not assigned.\n";
                readonly example: 42;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly type: {
                readonly $ref: "#/components/schemas/ip_type";
            };
        };
        readonly required: readonly ["id", "name", "description", "ip", "type", "server", "dns_ptr", "home_location", "blocked", "protection", "labels", "created"];
        readonly type: "object";
    };
    get_action_for_certificate_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/certificates/{id}/actions/{action_id}";
    };
    get_action_for_firewall_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/firewalls/{id}/actions/{action_id}";
    };
    get_action_for_floating_ip_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/floating_ips/{id}/actions/{action_id}";
    };
    get_action_for_image_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/images/{id}/actions/{action_id}";
    };
    get_action_for_load_balancer_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/load_balancers/{id}/actions/{action_id}";
    };
    get_action_for_network_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/networks/{id}/actions/{action_id}";
    };
    get_action_for_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/servers/{id}/actions/{action_id}";
    };
    get_action_for_volume_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/volumes/{id}/actions/{action_id}";
    };
    get_action_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/{resource}/actions";
    };
    get_certificate_responseSchema: {
        readonly properties: {
            readonly certificate: {
                readonly $ref: "#/components/schemas/certificate";
            };
        };
        readonly required: readonly ["certificate"];
        readonly title: "CertificateResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/certificates/{id}";
    };
    get_datacenter_responseSchema: {
        readonly properties: {
            readonly datacenter: {
                readonly $ref: "#/components/schemas/datacenter";
            };
        };
        readonly required: readonly ["datacenter"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/datacenters/{id}";
    };
    get_firewall_responseSchema: {
        readonly properties: {
            readonly firewall: {
                readonly $ref: "#/components/schemas/firewall";
            };
        };
        readonly required: readonly ["firewall"];
        readonly title: "FirewallResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/firewalls/{id}";
    };
    get_floating_ip_responseSchema: {
        readonly properties: {
            readonly floating_ip: {
                readonly $ref: "#/components/schemas/floating_ip";
            };
        };
        readonly required: readonly ["floating_ip"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/floating_ips/{id}";
    };
    get_image_responseSchema: {
        readonly properties: {
            readonly image: {
                readonly $ref: "#/components/schemas/image";
            };
        };
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/images/{id}";
    };
    get_iso_responseSchema: {
        readonly properties: {
            readonly iso: {
                readonly $ref: "#/components/schemas/iso";
            };
        };
        readonly required: readonly ["iso"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/isos/{id}";
    };
    get_load_balancer_responseSchema: {
        readonly properties: {
            readonly load_balancer: {
                readonly $ref: "#/components/schemas/load_balancer";
            };
        };
        readonly required: readonly ["load_balancer"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/load_balancers/{id}";
    };
    get_load_balancer_type_responseSchema: {
        readonly properties: {
            readonly load_balancer_type: {
                readonly $ref: "#/components/schemas/load_balancer_type";
            };
        };
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/load_balancer_types/{id}";
    };
    get_location_responseSchema: {
        readonly properties: {
            readonly location: {
                readonly $ref: "#/components/schemas/location";
            };
        };
        readonly required: readonly ["location"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/locations/{id}";
    };
    get_metrics_for_loadbalancer_responseSchema: {
        readonly properties: {
            readonly metrics: {
                readonly $ref: "#/components/schemas/metrics";
            };
        };
        readonly required: readonly ["metrics"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/load_balancers/{id}/metrics";
    };
    get_metrics_for_server_responseSchema: {
        readonly properties: {
            readonly metrics: {
                readonly $ref: "#/components/schemas/metrics";
            };
        };
        readonly required: readonly ["metrics"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/servers/{id}/metrics";
    };
    get_network_responseSchema: {
        readonly properties: {
            readonly network: {
                readonly $ref: "#/components/schemas/network";
            };
        };
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/networks/{id}";
    };
    get_placementgroup_responseSchema: {
        readonly properties: {
            readonly placement_group: {
                readonly properties: {
                    readonly created: {
                        readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                        readonly example: "2016-01-30T23:55:00+00:00";
                        readonly type: "string";
                    };
                    readonly id: {
                        readonly description: "ID of the Placement Group.";
                        readonly example: 42;
                        readonly format: "int64";
                        readonly maximum: 9007199254740991;
                        readonly type: "integer";
                    };
                    readonly labels: {
                        readonly $ref: "#/components/schemas/labels";
                    };
                    readonly name: {
                        readonly description: "Name of the Resource. Must be unique per Project.";
                        readonly example: "my-resource";
                        readonly type: "string";
                    };
                    readonly servers: {
                        readonly description: "Array of IDs of Servers that are part of this Placement Group";
                        readonly example: readonly [42];
                        readonly items: {
                            readonly format: "int64";
                            readonly type: "integer";
                        };
                        readonly type: "array";
                    };
                    readonly type: {
                        readonly description: "Type of the Placement Group";
                        readonly enum: readonly ["spread"];
                        readonly example: "spread";
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["id", "name", "labels", "type", "created", "servers"];
                readonly title: "PlacementGroup";
                readonly type: "object";
            };
        };
        readonly required: readonly ["placement_group"];
        readonly title: "PlacementGroupResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/placement_groups/{id}";
    };
    get_primary_ip_responseSchema: {
        readonly properties: {
            readonly primary_ip: {
                readonly properties: {
                    readonly assignee_id: {
                        readonly description: "ID of the resource the Primary IP is assigned to, null if it is not assigned at all";
                        readonly example: 17;
                        readonly format: "int64";
                        readonly nullable: true;
                        readonly type: "integer";
                    };
                    readonly assignee_type: {
                        readonly description: "Resource type the Primary IP can be assigned to";
                        readonly enum: readonly ["server"];
                        readonly type: "string";
                    };
                    readonly auto_delete: {
                        readonly description: "Delete this Primary IP when the resource it is assigned to is deleted";
                        readonly example: true;
                        readonly type: "boolean";
                    };
                    readonly blocked: {
                        readonly description: "Whether the IP is blocked";
                        readonly example: false;
                        readonly type: "boolean";
                    };
                    readonly created: {
                        readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                        readonly example: "2016-01-30T23:55:00+00:00";
                        readonly type: "string";
                    };
                    readonly datacenter: {
                        readonly $ref: "#/components/schemas/datacenter";
                    };
                    readonly dns_ptr: {
                        readonly description: "Array of reverse DNS entries";
                        readonly items: {
                            readonly $ref: "#/components/schemas/dns_ptr";
                        };
                        readonly type: "array";
                    };
                    readonly id: {
                        readonly description: "ID of the Primary IP.";
                        readonly example: 42;
                        readonly format: "int64";
                        readonly maximum: 9007199254740991;
                        readonly type: "integer";
                    };
                    readonly ip: {
                        readonly description: "IP address.";
                        readonly example: "131.232.99.1";
                        readonly type: "string";
                    };
                    readonly labels: {
                        readonly $ref: "#/components/schemas/labels";
                    };
                    readonly name: {
                        readonly description: "Name of the Resource. Must be unique per Project.";
                        readonly example: "my-resource";
                        readonly type: "string";
                    };
                    readonly protection: {
                        readonly $ref: "#/components/schemas/protection";
                    };
                    readonly type: {
                        readonly $ref: "#/components/schemas/ip_type";
                    };
                };
                readonly required: readonly ["id", "name", "labels", "created", "blocked", "datacenter", "ip", "dns_ptr", "protection", "type", "auto_delete", "assignee_type", "assignee_id"];
                readonly title: "PrimaryIP";
                readonly type: "object";
            };
        };
        readonly required: readonly ["primary_ip"];
        readonly title: "PrimaryIPResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/primary_ips/{id}";
    };
    get_server_responseSchema: {
        readonly properties: {
            readonly server: {
                readonly $ref: "#/components/schemas/server";
            };
        };
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/servers/{id}";
    };
    get_server_type_responseSchema: {
        readonly properties: {
            readonly server_type: {
                readonly $ref: "#/components/schemas/server_type";
            };
        };
        readonly required: readonly ["server_type"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/server_types/{id}";
    };
    get_ssh_key_responseSchema: {
        readonly properties: {
            readonly ssh_key: {
                readonly $ref: "#/components/schemas/ssh_key";
            };
        };
        readonly required: readonly ["ssh_key"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/ssh_keys/{id}";
    };
    get_volume_responseSchema: {
        readonly properties: {
            readonly volume: {
                readonly $ref: "#/components/schemas/volume";
            };
        };
        readonly required: readonly ["volume"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/volumes/{id}";
    };
    health_statusSchema: {
        readonly properties: {
            readonly listen_port: {
                readonly example: 443;
                readonly type: "integer";
            };
            readonly status: {
                readonly enum: readonly ["healthy", "unhealthy", "unknown"];
                readonly example: "healthy";
                readonly type: "string";
            };
        };
        readonly type: "object";
    };
    httpSchema: {
        readonly description: "Configuration option for protocols http and https";
        readonly properties: {
            readonly certificates: {
                readonly description: "IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is `http`.";
                readonly example: readonly [897];
                readonly items: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly type: "array";
            };
            readonly cookie_lifetime: {
                readonly default: 300;
                readonly description: "Lifetime of the cookie used for sticky sessions (in seconds).";
                readonly example: 300;
                readonly type: "integer";
            };
            readonly cookie_name: {
                readonly default: "HCLBSTICKY";
                readonly description: "Name of the cookie used for sticky sessions.";
                readonly example: "HCLBSTICKY";
                readonly type: "string";
            };
            readonly redirect_http: {
                readonly default: false;
                readonly description: "Redirect HTTP requests to HTTPS. Only available if `protocol` is `https`.";
                readonly example: true;
                readonly type: "boolean";
            };
            readonly sticky_sessions: {
                readonly default: false;
                readonly description: "Use sticky sessions. Only available if `protocol` is `http` or `https`.";
                readonly example: true;
                readonly type: "boolean";
            };
        };
        readonly title: "LoadBalancerServiceHTTP";
        readonly type: "object";
    };
    imageSchema: {
        readonly properties: {
            readonly architecture: {
                readonly $ref: "#/components/schemas/architecture";
            };
            readonly bound_to: {
                readonly description: "ID of Server the Image is bound to. Only set for Images of type `backup`.";
                readonly example: null;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly created: {
                readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly created_from: {
                readonly $ref: "#/components/schemas/created_from";
            };
            readonly deleted: {
                readonly description: "Point in time where the Image was deleted (in ISO-8601 format)";
                readonly example: null;
                readonly nullable: true;
                readonly type: "string";
            };
            readonly deprecated: {
                readonly description: "Point in time when the Image is considered to be deprecated (in ISO-8601 format)";
                readonly example: "2018-02-28T00:00:00+00:00";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Description of the Image";
                readonly example: "Ubuntu 20.04 Standard 64 bit";
                readonly type: "string";
            };
            readonly disk_size: {
                readonly description: "Size of the disk contained in the Image in GB";
                readonly example: 10;
                readonly type: "number";
            };
            readonly id: {
                readonly description: "ID of the Image.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly image_size: {
                readonly description: "Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.";
                readonly example: 2.3;
                readonly nullable: true;
                readonly type: "number";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Unique identifier of the Image. This value is only set for system Images.";
                readonly example: "ubuntu-20.04";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly os_flavor: {
                readonly description: "Flavor of operating system contained in the Image";
                readonly enum: readonly ["alma", "centos", "debian", "fedora", "rocky", "ubuntu", "unknown"];
                readonly example: "ubuntu";
                readonly type: "string";
            };
            readonly os_version: {
                readonly description: "Operating system version";
                readonly example: "20.04";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly protection: {
                readonly $ref: "#/components/schemas/protection";
            };
            readonly rapid_deploy: {
                readonly description: "Indicates that rapid deploy of the Image is available";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly status: {
                readonly description: "Whether the Image can be used or if it's still being created or unavailable";
                readonly enum: readonly ["available", "creating", "unavailable"];
                readonly type: "string";
            };
            readonly type: {
                readonly description: "Type of the Image";
                readonly enum: readonly ["app", "backup", "snapshot", "system", "temporary"];
                readonly example: "snapshot";
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "type", "status", "name", "description", "image_size", "disk_size", "created", "created_from", "bound_to", "os_flavor", "os_version", "protection", "deprecated", "deleted", "labels", "architecture"];
        readonly type: "object";
    };
    image_optionalSchema: {
        readonly description: "Image the server is based on.";
        readonly nullable: true;
        readonly properties: {
            readonly architecture: {
                readonly $ref: "#/components/schemas/architecture";
            };
            readonly bound_to: {
                readonly description: "ID of Server the Image is bound to. Only set for Images of type `backup`.";
                readonly example: null;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly created: {
                readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly created_from: {
                readonly $ref: "#/components/schemas/created_from";
            };
            readonly deleted: {
                readonly description: "Point in time where the Image was deleted (in ISO-8601 format)";
                readonly example: null;
                readonly nullable: true;
                readonly type: "string";
            };
            readonly deprecated: {
                readonly description: "Point in time when the Image is considered to be deprecated (in ISO-8601 format)";
                readonly example: "2018-02-28T00:00:00+00:00";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Description of the Image";
                readonly example: "Ubuntu 20.04 Standard 64 bit";
                readonly type: "string";
            };
            readonly disk_size: {
                readonly description: "Size of the disk contained in the Image in GB";
                readonly example: 10;
                readonly type: "number";
            };
            readonly id: {
                readonly description: "ID of the Image.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly image_size: {
                readonly description: "Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.";
                readonly example: 2.3;
                readonly nullable: true;
                readonly type: "number";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Unique identifier of the Image. This value is only set for system Images.";
                readonly example: "ubuntu-20.04";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly os_flavor: {
                readonly description: "Flavor of operating system contained in the Image";
                readonly enum: readonly ["alma", "centos", "debian", "fedora", "rocky", "ubuntu", "unknown"];
                readonly example: "ubuntu";
                readonly type: "string";
            };
            readonly os_version: {
                readonly description: "Operating system version";
                readonly example: "20.04";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly protection: {
                readonly $ref: "#/components/schemas/protection";
            };
            readonly rapid_deploy: {
                readonly description: "Indicates that rapid deploy of the Image is available";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly status: {
                readonly description: "Whether the Image can be used or if it's still being created or unavailable";
                readonly enum: readonly ["available", "creating", "unavailable"];
                readonly type: "string";
            };
            readonly type: {
                readonly description: "Type of the Image";
                readonly enum: readonly ["app", "backup", "snapshot", "system", "temporary"];
                readonly example: "snapshot";
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "type", "status", "name", "description", "image_size", "disk_size", "created", "created_from", "bound_to", "os_flavor", "os_version", "protection", "deprecated", "deleted", "labels", "architecture"];
        readonly type: "object";
    };
    ip_typeSchema: {
        readonly description: "The type of the IP";
        readonly enum: readonly ["ipv4", "ipv6"];
        readonly type: "string";
    };
    ipv4Schema: {
        readonly description: "IP address (v4) and its reverse DNS entry of this Server";
        readonly nullable: true;
        readonly properties: {
            readonly blocked: {
                readonly description: "If the IP is blocked by our anti abuse dept";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly dns_ptr: {
                readonly description: "Reverse DNS PTR entry for the IPv4 addresses of this Server";
                readonly example: "server01.example.com";
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Primary IP.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly ip: {
                readonly description: "IP address (v4) of this Server";
                readonly example: "1.2.3.4";
                readonly type: "string";
            };
        };
        readonly required: readonly ["ip", "blocked", "dns_ptr"];
        readonly type: "object";
    };
    ipv6Schema: {
        readonly description: "IPv6 network assigned to this Server and its reverse DNS entry";
        readonly nullable: true;
        readonly properties: {
            readonly blocked: {
                readonly description: "If the IP is blocked by our anti abuse dept";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly dns_ptr: {
                readonly description: "Reverse DNS PTR entries for the IPv6 addresses of this Server";
                readonly items: {
                    readonly $ref: "#/components/schemas/dns_ptr";
                };
                readonly nullable: true;
                readonly type: "array";
            };
            readonly id: {
                readonly description: "ID of the Primary IP.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly ip: {
                readonly description: "IP address (v6) of this Server";
                readonly example: "2001:db8::/64";
                readonly type: "string";
            };
        };
        readonly required: readonly ["ip", "blocked", "dns_ptr"];
        readonly type: "object";
    };
    isoSchema: {
        readonly properties: {
            readonly architecture: {
                readonly $ref: "#/components/schemas/architecture_optional";
            };
            readonly deprecation: {
                readonly $ref: "#/components/schemas/deprecation_info";
            };
            readonly description: {
                readonly description: "Description of the ISO";
                readonly example: "FreeBSD 11.0 x64";
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the ISO.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly name: {
                readonly description: "Unique identifier of the ISO. Only set for public ISOs";
                readonly example: "FreeBSD-11.0-RELEASE-amd64-dvd1";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly type: {
                readonly description: "Type of the ISO";
                readonly enum: readonly ["private", "public"];
                readonly nullable: true;
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "name", "description", "type", "deprecation", "architecture"];
        readonly type: "object";
    };
    iso_optionalSchema: {
        readonly description: "ISO Image that is attached to this Server. Null if no ISO is attached.";
        readonly nullable: true;
        readonly properties: {
            readonly architecture: {
                readonly $ref: "#/components/schemas/architecture_optional";
            };
            readonly deprecation: {
                readonly $ref: "#/components/schemas/deprecation_info";
            };
            readonly description: {
                readonly description: "Description of the ISO";
                readonly example: "FreeBSD 11.0 x64";
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the ISO.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly name: {
                readonly description: "Unique identifier of the ISO. Only set for public ISOs";
                readonly example: "FreeBSD-11.0-RELEASE-amd64-dvd1";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly type: {
                readonly description: "Type of the ISO";
                readonly enum: readonly ["private", "public"];
                readonly nullable: true;
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "name", "description", "type", "deprecation", "architecture"];
        readonly type: "object";
    };
    label_selectorSchema: {
        readonly properties: {
            readonly selector: {
                readonly description: "Label selector";
                readonly example: "env=prod";
                readonly type: "string";
            };
        };
        readonly required: readonly ["selector"];
        readonly type: "object";
        readonly description: "Configuration for type LabelSelector, required if type is `label_selector`";
    };
    labelsSchema: {
        readonly additionalProperties: {
            readonly type: "string";
            readonly pattern: "^(()|[a-z0-9A-Z]|([a-z0-9A-Z][a-z0-9A-Z\\._-]{0,61}[a-z0-9A-Z]))$";
        };
        readonly description: "User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"[Labels](#labels)\".\n";
        readonly example: {
            readonly environment: "prod";
            readonly 'example.com/my': "label";
            readonly 'just-a-key': "";
        };
        readonly type: "object";
    };
    list_actions_for_certificate_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["actions", "meta"];
        readonly title: "ActionListResponseWithMeta";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/certificates/{id}/actions";
    };
    list_actions_for_firewall_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["actions", "meta"];
        readonly title: "ActionListResponseWithMeta";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/firewalls/{id}/actions";
    };
    list_actions_for_floating_ip_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["actions", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/floating_ips/{id}/actions";
    };
    list_actions_for_image_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["actions", "meta"];
        readonly title: "ActionListResponseWithMeta";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/images/{id}/actions";
    };
    list_actions_for_load_balancer_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["actions", "meta"];
        readonly title: "ActionListResponseWithMeta";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/load_balancers/{id}/actions";
    };
    list_actions_for_network_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["actions", "meta"];
        readonly title: "ActionListResponseWithMeta";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/networks/{id}/actions";
    };
    list_actions_for_server_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["actions", "meta"];
        readonly title: "ActionListResponseWithMeta";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/servers/{id}/actions";
    };
    list_actions_for_volume_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["actions", "meta"];
        readonly title: "ActionListResponseWithMeta";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/volumes/{id}/actions";
    };
    list_actions_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["actions", "meta"];
        readonly title: "ActionListResponseWithMeta";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/{resource}/actions/{id}";
    };
    list_certificates_responseSchema: {
        readonly properties: {
            readonly certificates: {
                readonly items: {
                    readonly $ref: "#/components/schemas/certificate";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["certificates", "meta"];
        readonly title: "CertificatesResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/certificates";
    };
    list_datacenters_responseSchema: {
        readonly properties: {
            readonly datacenters: {
                readonly description: "List of [Datacenters](#datacenters).";
                readonly items: {
                    readonly $ref: "#/components/schemas/datacenter";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
            readonly recommendation: {
                readonly description: "Recommended [Datacenter](#datacenters) for creating new resources.";
                readonly example: 1;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly required: readonly ["datacenters", "recommendation", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/datacenters";
    };
    list_firewalls_responseSchema: {
        readonly properties: {
            readonly firewalls: {
                readonly items: {
                    readonly $ref: "#/components/schemas/firewall";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["firewalls", "meta"];
        readonly title: "FirewallsResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/firewalls";
    };
    list_floating_ips_responseSchema: {
        readonly properties: {
            readonly floating_ips: {
                readonly items: {
                    readonly $ref: "#/components/schemas/floating_ip";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["floating_ips", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/floating_ips";
    };
    list_images_responseSchema: {
        readonly properties: {
            readonly images: {
                readonly items: {
                    readonly $ref: "#/components/schemas/image";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["images", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/images";
    };
    list_isos_responseSchema: {
        readonly properties: {
            readonly isos: {
                readonly items: {
                    readonly $ref: "#/components/schemas/iso";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["isos", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/isos";
    };
    list_load_balancer_types_responseSchema: {
        readonly properties: {
            readonly load_balancer_types: {
                readonly items: {
                    readonly $ref: "#/components/schemas/load_balancer_type";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["load_balancer_types", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/load_balancer_types";
    };
    list_load_balancers_responseSchema: {
        readonly properties: {
            readonly load_balancers: {
                readonly items: {
                    readonly $ref: "#/components/schemas/load_balancer";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["load_balancers", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/load_balancers";
    };
    list_locations_responseSchema: {
        readonly properties: {
            readonly locations: {
                readonly description: "List of Locations.";
                readonly items: {
                    readonly $ref: "#/components/schemas/location";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["locations", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/locations";
    };
    list_networks_responseSchema: {
        readonly properties: {
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
            readonly networks: {
                readonly items: {
                    readonly $ref: "#/components/schemas/network";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["networks", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/networks";
    };
    list_placementgroups_responseSchema: {
        readonly properties: {
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
            readonly placement_groups: {
                readonly items: {
                    readonly properties: {
                        readonly created: {
                            readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                            readonly example: "2016-01-30T23:55:00+00:00";
                            readonly type: "string";
                        };
                        readonly id: {
                            readonly description: "ID of the Placement Group.";
                            readonly example: 42;
                            readonly format: "int64";
                            readonly maximum: 9007199254740991;
                            readonly type: "integer";
                        };
                        readonly labels: {
                            readonly $ref: "#/components/schemas/labels";
                        };
                        readonly name: {
                            readonly description: "Name of the Resource. Must be unique per Project.";
                            readonly example: "my-resource";
                            readonly type: "string";
                        };
                        readonly servers: {
                            readonly description: "Array of IDs of Servers that are part of this Placement Group";
                            readonly example: readonly [42];
                            readonly items: {
                                readonly format: "int64";
                                readonly type: "integer";
                            };
                            readonly type: "array";
                        };
                        readonly type: {
                            readonly description: "Type of the Placement Group";
                            readonly enum: readonly ["spread"];
                            readonly example: "spread";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["id", "name", "labels", "type", "created", "servers"];
                    readonly title: "PlacementGroup";
                    readonly type: "object";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["placement_groups", "meta"];
        readonly title: "PlacementGroupsResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/placement_groups";
    };
    list_prices_responseSchema: {
        readonly properties: {
            readonly pricing: {
                readonly additionalProperties: false;
                readonly properties: {
                    readonly currency: {
                        readonly description: "Currency the returned prices are expressed in, coded according to ISO 4217";
                        readonly example: "EUR";
                        readonly type: "string";
                    };
                    readonly floating_ip: {
                        readonly description: "The cost of one Floating IP per month";
                        readonly properties: {
                            readonly price_monthly: {
                                readonly $ref: "#/components/schemas/price";
                            };
                        };
                        readonly required: readonly ["price_monthly"];
                        readonly type: "object";
                    };
                    readonly floating_ips: {
                        readonly description: "Costs of Floating IPs types per Location and type";
                        readonly items: {
                            readonly properties: {
                                readonly prices: {
                                    readonly description: "Floating IP type costs per Location";
                                    readonly items: {
                                        readonly $ref: "#/components/schemas/price_per_time_monthly";
                                    };
                                    readonly type: "array";
                                };
                                readonly type: {
                                    readonly $ref: "#/components/schemas/ip_type";
                                };
                            };
                            readonly required: readonly ["type", "prices"];
                            readonly type: "object";
                            readonly title: "ListPricesResponsePricingFloatingIps";
                        };
                        readonly type: "array";
                    };
                    readonly image: {
                        readonly description: "The cost of Image per GB/month";
                        readonly properties: {
                            readonly price_per_gb_month: {
                                readonly $ref: "#/components/schemas/price";
                            };
                        };
                        readonly required: readonly ["price_per_gb_month"];
                        readonly type: "object";
                    };
                    readonly load_balancer_types: {
                        readonly description: "Costs of Load Balancer types per Location and type";
                        readonly items: {
                            readonly properties: {
                                readonly id: {
                                    readonly description: "ID of the Load Balancer type the price is for";
                                    readonly example: 1;
                                    readonly format: "int64";
                                    readonly type: "integer";
                                    readonly maximum: 9007199254740991;
                                };
                                readonly name: {
                                    readonly description: "Name of the Load Balancer type the price is for";
                                    readonly example: "lb11";
                                    readonly type: "string";
                                };
                                readonly prices: {
                                    readonly description: "Load Balancer type costs per Location";
                                    readonly items: {
                                        readonly $ref: "#/components/schemas/price_per_time";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["id", "name", "prices"];
                            readonly type: "object";
                            readonly title: "ListPricesResponsePricingLoadBalancerTypes";
                        };
                        readonly type: "array";
                    };
                    readonly primary_ips: {
                        readonly description: "Costs of Primary IPs types per Location";
                        readonly items: {
                            readonly properties: {
                                readonly prices: {
                                    readonly description: "Primary IP type costs per Location";
                                    readonly items: {
                                        readonly $ref: "#/components/schemas/price_per_time_without_traffic";
                                    };
                                    readonly type: "array";
                                };
                                readonly type: {
                                    readonly $ref: "#/components/schemas/ip_type";
                                };
                            };
                            readonly required: readonly ["type", "prices"];
                            readonly type: "object";
                            readonly title: "ListPricesResponsePricingPrimaryIps";
                        };
                        readonly type: "array";
                    };
                    readonly server_backup: {
                        readonly description: "Will increase base Server costs by specific percentage";
                        readonly properties: {
                            readonly percentage: {
                                readonly description: "Percentage by how much the base price will increase";
                                readonly example: "20.0000000000";
                                readonly format: "decimal";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["percentage"];
                        readonly type: "object";
                    };
                    readonly server_types: {
                        readonly description: "Costs of Server types per Location and type";
                        readonly items: {
                            readonly properties: {
                                readonly id: {
                                    readonly description: "ID of the Server type the price is for";
                                    readonly example: 4;
                                    readonly format: "int64";
                                    readonly type: "integer";
                                    readonly maximum: 9007199254740991;
                                };
                                readonly name: {
                                    readonly description: "Name of the Server type the price is for";
                                    readonly example: "cx11";
                                    readonly type: "string";
                                };
                                readonly prices: {
                                    readonly description: "Server type costs per Location";
                                    readonly items: {
                                        readonly $ref: "#/components/schemas/price_per_time";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["id", "name", "prices"];
                            readonly type: "object";
                            readonly title: "ListPricesResponsePricingServerTypes";
                        };
                        readonly type: "array";
                    };
                    readonly traffic: {
                        readonly deprecated: true;
                        readonly description: "**Deprecated**: This field is deprecated and set to `null` since 5 August 2024.\nPlease refer to the `price_per_tb_traffic` fields in `server_types` and `load_balancer_types` instead.\n\nLearn more about this change in [the Changelog](https://docs.hetzner.cloud/changelog#2024-07-25-cloud-api-returns-traffic-information-in-different-format).\n";
                        readonly example: null;
                        readonly nullable: true;
                        readonly type: "object";
                    };
                    readonly vat_rate: {
                        readonly description: "The VAT rate used for calculating prices with VAT";
                        readonly example: "19.000000";
                        readonly format: "decimal";
                        readonly type: "string";
                    };
                    readonly volume: {
                        readonly description: "The cost of Volume per GB/month";
                        readonly properties: {
                            readonly price_per_gb_month: {
                                readonly $ref: "#/components/schemas/price";
                            };
                        };
                        readonly required: readonly ["price_per_gb_month"];
                        readonly type: "object";
                    };
                };
                readonly required: readonly ["currency", "vat_rate", "image", "floating_ip", "floating_ips", "traffic", "server_backup", "volume", "server_types", "load_balancer_types", "primary_ips"];
                readonly type: "object";
            };
        };
        readonly required: readonly ["pricing"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/pricing";
    };
    list_primary_ips_responseSchema: {
        readonly properties: {
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
            readonly primary_ips: {
                readonly items: {
                    readonly properties: {
                        readonly assignee_id: {
                            readonly description: "ID of the resource the Primary IP is assigned to, null if it is not assigned at all";
                            readonly example: 17;
                            readonly format: "int64";
                            readonly nullable: true;
                            readonly type: "integer";
                        };
                        readonly assignee_type: {
                            readonly description: "Resource type the Primary IP can be assigned to";
                            readonly enum: readonly ["server"];
                            readonly type: "string";
                        };
                        readonly auto_delete: {
                            readonly description: "Delete this Primary IP when the resource it is assigned to is deleted";
                            readonly example: true;
                            readonly type: "boolean";
                        };
                        readonly blocked: {
                            readonly description: "Whether the IP is blocked";
                            readonly example: false;
                            readonly type: "boolean";
                        };
                        readonly created: {
                            readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                            readonly example: "2016-01-30T23:55:00+00:00";
                            readonly type: "string";
                        };
                        readonly datacenter: {
                            readonly $ref: "#/components/schemas/datacenter";
                        };
                        readonly dns_ptr: {
                            readonly description: "Array of reverse DNS entries";
                            readonly items: {
                                readonly $ref: "#/components/schemas/dns_ptr";
                            };
                            readonly type: "array";
                        };
                        readonly id: {
                            readonly description: "ID of the Primary IP.";
                            readonly example: 42;
                            readonly format: "int64";
                            readonly maximum: 9007199254740991;
                            readonly type: "integer";
                        };
                        readonly ip: {
                            readonly description: "IP address.";
                            readonly example: "131.232.99.1";
                            readonly type: "string";
                        };
                        readonly labels: {
                            readonly $ref: "#/components/schemas/labels";
                        };
                        readonly name: {
                            readonly description: "Name of the Resource. Must be unique per Project.";
                            readonly example: "my-resource";
                            readonly type: "string";
                        };
                        readonly protection: {
                            readonly $ref: "#/components/schemas/protection";
                        };
                        readonly type: {
                            readonly $ref: "#/components/schemas/ip_type";
                        };
                    };
                    readonly required: readonly ["id", "name", "labels", "created", "blocked", "datacenter", "ip", "dns_ptr", "protection", "type", "auto_delete", "assignee_type", "assignee_id"];
                    readonly title: "PrimaryIP";
                    readonly type: "object";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["primary_ips", "meta"];
        readonly title: "PrimaryIPsResponse";
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/primary_ips";
    };
    list_server_types_responseSchema: {
        readonly properties: {
            readonly server_types: {
                readonly items: {
                    readonly $ref: "#/components/schemas/server_type";
                };
                readonly type: "array";
            };
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
        };
        readonly required: readonly ["server_types", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/server_types";
    };
    list_servers_responseSchema: {
        readonly properties: {
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
            readonly servers: {
                readonly items: {
                    readonly $ref: "#/components/schemas/server";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["servers", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/servers";
    };
    list_ssh_keys_responseSchema: {
        readonly properties: {
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
            readonly ssh_keys: {
                readonly items: {
                    readonly $ref: "#/components/schemas/ssh_key";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["ssh_keys", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/ssh_keys";
    };
    list_volumes_responseSchema: {
        readonly properties: {
            readonly meta: {
                readonly $ref: "#/components/schemas/meta";
            };
            readonly volumes: {
                readonly items: {
                    readonly $ref: "#/components/schemas/volume";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["volumes", "meta"];
        readonly type: "object";
        readonly description: "Response to GET https://api.hetzner.cloud/v1/volumes";
    };
    load_balancerSchema: {
        readonly properties: {
            readonly algorithm: {
                readonly $ref: "#/components/schemas/load_balancer_algorithm";
            };
            readonly created: {
                readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Load Balancer.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly included_traffic: {
                readonly description: "Free Traffic for the current billing period in bytes";
                readonly example: 10000;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly ingoing_traffic: {
                readonly description: "Inbound Traffic for the current billing period in bytes";
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly load_balancer_type: {
                readonly $ref: "#/components/schemas/load_balancer_type";
            };
            readonly location: {
                readonly $ref: "#/components/schemas/location";
            };
            readonly name: {
                readonly description: "Name of the Resource. Must be unique per Project.";
                readonly example: "my-resource";
                readonly type: "string";
            };
            readonly outgoing_traffic: {
                readonly description: "Outbound Traffic for the current billing period in bytes";
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly private_net: {
                readonly description: "Private networks information";
                readonly items: {
                    readonly $ref: "#/components/schemas/load_balancer_private_net";
                };
                readonly type: "array";
            };
            readonly protection: {
                readonly $ref: "#/components/schemas/protection";
            };
            readonly public_net: {
                readonly $ref: "#/components/schemas/load_balancer_public_net";
            };
            readonly services: {
                readonly description: "List of services that belong to this Load Balancer";
                readonly items: {
                    readonly $ref: "#/components/schemas/load_balancer_service";
                };
                readonly type: "array";
            };
            readonly targets: {
                readonly description: "List of targets that belong to this Load Balancer";
                readonly items: {
                    readonly $ref: "#/components/schemas/target";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["id", "name", "public_net", "private_net", "location", "load_balancer_type", "protection", "labels", "created", "services", "targets", "algorithm", "outgoing_traffic", "ingoing_traffic", "included_traffic"];
        readonly type: "object";
    };
    load_balancer_algorithmSchema: {
        readonly default: {
            readonly type: "round_robin";
        };
        readonly description: "Algorithm of the Load Balancer";
        readonly properties: {
            readonly type: {
                readonly default: "round_robin";
                readonly description: "Type of the algorithm.";
                readonly enum: readonly ["least_connections", "round_robin"];
                readonly type: "string";
            };
        };
        readonly required: readonly ["type"];
        readonly title: "LoadBalancerAlgorithm";
        readonly type: "object";
    };
    load_balancer_private_netSchema: {
        readonly properties: {
            readonly ip: {
                readonly description: "IP address (v4) of this Load Balancer in this Network";
                readonly example: "10.0.0.2";
                readonly type: "string";
            };
            readonly network: {
                readonly description: "ID of the Network";
                readonly example: 4711;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly type: "object";
    };
    load_balancer_public_netSchema: {
        readonly description: "Public network information";
        readonly properties: {
            readonly enabled: {
                readonly description: "Public Interface enabled or not";
                readonly type: "boolean";
            };
            readonly ipv4: {
                readonly description: "IP address (v4)";
                readonly properties: {
                    readonly dns_ptr: {
                        readonly description: "Reverse DNS PTR entry for the IPv4 address of this Load Balancer";
                        readonly example: "lb1.example.com";
                        readonly nullable: true;
                        readonly type: "string";
                    };
                    readonly ip: {
                        readonly description: "IP address (v4) of this Load Balancer";
                        readonly example: "1.2.3.4";
                        readonly nullable: true;
                        readonly type: "string";
                    };
                };
                readonly type: "object";
            };
            readonly ipv6: {
                readonly description: "IP address (v6)";
                readonly properties: {
                    readonly dns_ptr: {
                        readonly description: "Reverse DNS PTR entry for the IPv6 address of this Load Balancer";
                        readonly example: "lb1.example.com";
                        readonly nullable: true;
                        readonly type: "string";
                    };
                    readonly ip: {
                        readonly description: "IP address (v6) of this Load Balancer";
                        readonly example: "2001:db8::1";
                        readonly nullable: true;
                        readonly type: "string";
                    };
                };
                readonly type: "object";
            };
        };
        readonly required: readonly ["enabled", "ipv4", "ipv6"];
        readonly type: "object";
    };
    load_balancer_serviceSchema: {
        readonly properties: {
            readonly destination_port: {
                readonly description: "Port the Load Balancer will balance to";
                readonly example: 80;
                readonly type: "integer";
            };
            readonly health_check: {
                readonly additionalProperties: false;
                readonly description: "Service health check";
                readonly properties: {
                    readonly http: {
                        readonly additionalProperties: false;
                        readonly description: "Additional configuration for protocol http";
                        readonly properties: {
                            readonly domain: {
                                readonly description: "Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.";
                                readonly example: "example.com";
                                readonly nullable: true;
                                readonly type: "string";
                            };
                            readonly path: {
                                readonly description: "HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.";
                                readonly example: "/";
                                readonly type: "string";
                            };
                            readonly response: {
                                readonly description: "String that must be contained in HTTP response in order to pass the health check";
                                readonly example: "{\"status\": \"ok\"}";
                                readonly type: "string";
                            };
                            readonly status_codes: {
                                readonly default: readonly ["2??", "3??"];
                                readonly description: "List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones.";
                                readonly example: readonly ["2??", "3??"];
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly type: "array";
                            };
                            readonly tls: {
                                readonly description: "Use HTTPS for health check";
                                readonly example: false;
                                readonly type: "boolean";
                            };
                        };
                        readonly required: readonly ["domain", "path"];
                        readonly type: "object";
                    };
                    readonly interval: {
                        readonly description: "Time interval in seconds health checks are performed";
                        readonly example: 15;
                        readonly type: "integer";
                    };
                    readonly port: {
                        readonly description: "Port the health check will be performed on";
                        readonly example: 4711;
                        readonly type: "integer";
                    };
                    readonly protocol: {
                        readonly description: "Type of the health check";
                        readonly enum: readonly ["http", "tcp"];
                        readonly example: "http";
                        readonly type: "string";
                    };
                    readonly retries: {
                        readonly description: "Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again";
                        readonly example: 3;
                        readonly type: "integer";
                    };
                    readonly timeout: {
                        readonly description: "Time in seconds after an attempt is considered a timeout";
                        readonly example: 10;
                        readonly type: "integer";
                    };
                };
                readonly required: readonly ["protocol", "port", "interval", "timeout", "retries"];
                readonly title: "LoadBalancerServiceHealthCheck";
                readonly type: "object";
            };
            readonly http: {
                readonly $ref: "#/components/schemas/http";
            };
            readonly listen_port: {
                readonly description: "Port the Load Balancer listens on";
                readonly example: 443;
                readonly type: "integer";
            };
            readonly protocol: {
                readonly description: "Protocol of the Load Balancer";
                readonly enum: readonly ["http", "https", "tcp"];
                readonly example: "https";
                readonly type: "string";
            };
            readonly proxyprotocol: {
                readonly description: "Is Proxyprotocol enabled or not";
                readonly example: false;
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["protocol", "listen_port", "destination_port", "proxyprotocol", "health_check"];
        readonly title: "LoadBalancerService";
        readonly type: "object";
        readonly description: "A service for a Load Balancer.";
    };
    load_balancer_typeSchema: {
        readonly properties: {
            readonly deprecated: {
                readonly description: "Point in time when the Load Balancer type is deprecated (in ISO-8601 format)";
                readonly example: "2016-01-30T23:50:00+00:00";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Description of the Load Balancer type";
                readonly example: "LB11";
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Load Balancer type";
                readonly example: 1;
                readonly format: "int64";
                readonly type: "integer";
                readonly maximum: 9007199254740991;
            };
            readonly max_assigned_certificates: {
                readonly description: "Number of SSL Certificates that can be assigned to a single Load Balancer";
                readonly example: 10;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly max_connections: {
                readonly description: "Number of maximum simultaneous open connections";
                readonly example: 20000;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly max_services: {
                readonly description: "Number of services a Load Balancer of this type can have";
                readonly example: 5;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly max_targets: {
                readonly description: "Number of targets a single Load Balancer can have";
                readonly example: 25;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly name: {
                readonly description: "Unique identifier of the Load Balancer type";
                readonly example: "lb11";
                readonly type: "string";
            };
            readonly prices: {
                readonly description: "Prices in different network zones";
                readonly items: {
                    readonly $ref: "#/components/schemas/price_per_time";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["id", "name", "description", "max_connections", "max_services", "max_targets", "max_assigned_certificates", "deprecated", "prices"];
        readonly type: "object";
    };
    locationSchema: {
        readonly description: "[Location](#locations) the [Datacenter](#datacenters) is located at.\n | [Location](#locations) the for the [Floating IP](#floating-ips) is located at.\n\nRouting is optimized for this [Location](#locations).\n | Location of the Volume. Volume can only be attached to Servers in the same Location.";
        readonly properties: {
            readonly city: {
                readonly description: "Name of the closest city to the Location.\n\nCity name or city name and state in short form. E.g. `Falkenstein` or `Ashburn, VA`.\n";
                readonly example: "Falkenstein";
                readonly type: "string";
            };
            readonly country: {
                readonly description: "Country the Location resides in.\n\nISO 3166-1 alpha-2 code of the country.\n";
                readonly example: "DE";
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Humand readable description of the Location.";
                readonly example: "Falkenstein DC Park 1";
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Location.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly latitude: {
                readonly description: "Latitude of the city closest to the Location.";
                readonly example: 50.47612;
                readonly format: "double";
                readonly type: "number";
            };
            readonly longitude: {
                readonly description: "Longitude of the city closest to the Location.";
                readonly example: 12.370071;
                readonly format: "double";
                readonly type: "number";
            };
            readonly name: {
                readonly description: "Unique identifier of the Location.";
                readonly example: "fsn1";
                readonly pattern: "^[a-z0-9]+(-?[a-z0-9]*)*$";
                readonly type: "string";
            };
            readonly network_zone: {
                readonly description: "Name of the Network Zone this Location resides in.";
                readonly example: "eu-central";
                readonly pattern: "^[a-z0-9]+(-?[a-z0-9]*)*$";
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "name", "description", "country", "city", "latitude", "longitude", "network_zone"];
        readonly type: "object";
    };
    metaSchema: {
        readonly properties: {
            readonly pagination: {
                readonly $ref: "#/components/schemas/pagination";
            };
        };
        readonly required: readonly ["pagination"];
        readonly title: "ListMeta";
        readonly type: "object";
        readonly description: "Metadata contained in the response";
    };
    metricsSchema: {
        readonly properties: {
            readonly end: {
                readonly description: "End of period of metrics reported (in ISO-8601 format)";
                readonly example: "2017-01-01T23:00:00+00:00";
                readonly type: "string";
            };
            readonly start: {
                readonly description: "Start of period of metrics reported (in ISO-8601 format)";
                readonly example: "2017-01-01T00:00:00+00:00";
                readonly type: "string";
            };
            readonly step: {
                readonly description: "Resolution of results in seconds.";
                readonly example: 60;
                readonly type: "integer";
            };
            readonly time_series: {
                readonly additionalProperties: {
                    readonly properties: {
                        readonly values: {
                            readonly description: "Metrics Timestamps with values";
                            readonly items: {
                                readonly items: {
                                    readonly oneOf: readonly [{
                                        readonly type: "number";
                                    }, {
                                        readonly type: "string";
                                    }];
                                    readonly title: "MetricsTimeSeriesValue";
                                };
                                readonly type: "array";
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["values"];
                    readonly type: "object";
                };
                readonly description: "Hash with timeseries information, containing the name of timeseries as key";
                readonly example: {
                    readonly name_of_timeseries: {
                        readonly values: readonly [readonly [1435781470.622, "42"], readonly [1435781471.622, "43"]];
                    };
                };
                readonly type: "object";
                readonly title: "MetricsTimeSeries";
            };
        };
        readonly required: readonly ["start", "end", "step", "time_series"];
        readonly type: "object";
        readonly description: "You must specify the type of metric to get: open_connections, requests_per_second or bandwidth. You can also specify more than one type by comma separation, e.g. requests_per_second,bandwidth. Depending on the type you will get different time series data.";
    };
    networkSchema: {
        readonly properties: {
            readonly created: {
                readonly description: "Point in time when the Network was created (in ISO-8601 format)";
                readonly example: "2016-01-30T23:50:00+00:00";
                readonly type: "string";
            };
            readonly expose_routes_to_vswitch: {
                readonly description: "Indicates if the routes from this network should be exposed to the vSwitch connection.";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly id: {
                readonly description: "ID of the Network";
                readonly example: 4711;
                readonly format: "int64";
                readonly type: "integer";
                readonly maximum: 9007199254740991;
            };
            readonly ip_range: {
                readonly description: "IP range in CIDR block notation of the whole network.";
                readonly example: "10.0.0.0/16";
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly load_balancers: {
                readonly description: "Array of IDs of Load Balancers attached to this Network";
                readonly example: readonly [42];
                readonly items: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly type: "array";
            };
            readonly name: {
                readonly description: "Name of the Network";
                readonly example: "mynet";
                readonly type: "string";
            };
            readonly protection: {
                readonly $ref: "#/components/schemas/protection";
            };
            readonly routes: {
                readonly description: "Array of routes set in this Network";
                readonly items: {
                    readonly $ref: "#/components/schemas/route";
                };
                readonly type: "array";
            };
            readonly servers: {
                readonly description: "Array of IDs of Servers attached to this Network";
                readonly example: readonly [42];
                readonly items: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly type: "array";
            };
            readonly subnets: {
                readonly description: "Array subnets allocated in this Network";
                readonly items: {
                    readonly $ref: "#/components/schemas/subnet_with_gateway";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["id", "name", "ip_range", "subnets", "routes", "servers", "protection", "labels", "created", "expose_routes_to_vswitch"];
        readonly type: "object";
    };
    paginationSchema: {
        readonly description: "See \"[Pagination](#pagination)\" for more information. | Information about the current pagination. The keys previous_page, next_page, last_page, and total_entries may be null when on the first page, last page, or when the total number of entries is unknown";
        readonly properties: {
            readonly last_page: {
                readonly description: "Page number of the last page available. Can be null if the current page is the last one. | ID of the last page available. Can be null if the current page is the last one.";
                readonly example: 4;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly next_page: {
                readonly description: "Page number of the next page. Can be null if the current page is the last one. | ID of the next page. Can be null if the current page is the last one.";
                readonly example: 4;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly page: {
                readonly description: "Current page number. | Current page number";
                readonly example: 3;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly per_page: {
                readonly description: "Maximum number of entries returned per page. | Maximum number of items shown per page in the response";
                readonly example: 25;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly previous_page: {
                readonly description: "Page number of the previous page. Can be null if the current page is the first one. | ID of the previous page. Can be null if the current page is the first one.";
                readonly example: 2;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly total_entries: {
                readonly description: "Total number of entries that exist for this query. Can be null if unknown. | The total number of entries that exist in the database for this query. Nullable if unknown.";
                readonly example: 100;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
        };
        readonly required: readonly ["page", "per_page", "previous_page", "next_page", "last_page", "total_entries"];
        readonly type: "object";
    };
    power_off_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/poweroff";
    };
    power_on_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/poweron";
    };
    priceSchema: {
        readonly description: "Hourly costs for a Resource in this Location. | Monthly costs for a Resource in this Location. | The cost of additional traffic per TB. | Monthly costs for a Floating IP type in this Location | Hourly costs for a Load Balancer type in this network zone | Monthly costs for a Load Balancer type in this network zone | Hourly costs for a Primary IP type in this Location | Monthly costs for a Primary IP type in this Location | Hourly costs for a Server type in this Location | Monthly costs for a Server type in this Location";
        readonly properties: {
            readonly gross: {
                readonly description: "Price with VAT added. | Price with VAT added";
                readonly example: "1.1900000000000000";
                readonly format: "decimal";
                readonly type: "string";
            };
            readonly net: {
                readonly description: "Price without VAT. | Price without VAT";
                readonly example: "1.0000000000";
                readonly format: "decimal";
                readonly type: "string";
            };
        };
        readonly required: readonly ["net", "gross"];
        readonly type: "object";
    };
    price_per_timeSchema: {
        readonly properties: {
            readonly included_traffic: {
                readonly description: "Free traffic per month in bytes.";
                readonly example: 654321;
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly location: {
                readonly description: "Name of the Location the price is for. | Name of the Location the price is for";
                readonly example: "fsn1";
                readonly type: "string";
            };
            readonly price_hourly: {
                readonly $ref: "#/components/schemas/price";
            };
            readonly price_monthly: {
                readonly $ref: "#/components/schemas/price";
            };
            readonly price_per_tb_traffic: {
                readonly $ref: "#/components/schemas/price";
            };
        };
        readonly required: readonly ["location", "price_hourly", "price_monthly", "included_traffic", "price_per_tb_traffic"];
        readonly type: "object";
    };
    price_per_time_monthlySchema: {
        readonly properties: {
            readonly location: {
                readonly description: "Name of the Location the price is for";
                readonly example: "fsn1";
                readonly type: "string";
            };
            readonly price_monthly: {
                readonly $ref: "#/components/schemas/price";
            };
        };
        readonly required: readonly ["location", "price_monthly"];
        readonly type: "object";
    };
    price_per_time_without_trafficSchema: {
        readonly properties: {
            readonly location: {
                readonly description: "Name of the Location the price is for";
                readonly example: "fsn1";
                readonly type: "string";
            };
            readonly price_hourly: {
                readonly $ref: "#/components/schemas/price";
            };
            readonly price_monthly: {
                readonly $ref: "#/components/schemas/price";
            };
        };
        readonly required: readonly ["location", "price_hourly", "price_monthly"];
        readonly type: "object";
    };
    protectionSchema: {
        readonly description: "Protection configuration for the Resource";
        readonly properties: {
            readonly delete: {
                readonly description: "Prevent the Resource from being deleted.";
                readonly example: false;
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["delete"];
        readonly type: "object";
    };
    rebuild_server_from_image_requestSchema: {
        readonly properties: {
            readonly image: {
                readonly description: "ID or name of Image to rebuilt from.";
                readonly example: "ubuntu-20.04";
                readonly type: "string";
            };
        };
        readonly required: readonly ["image"];
        readonly title: "RebuildServerRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/servers/{id}/actions/rebuild";
    };
    rebuild_server_from_image_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly root_password: {
                readonly description: "New root password when not using SSH keys";
                readonly nullable: true;
                readonly type: "string";
            };
        };
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/rebuild";
    };
    remove_from_placement_group_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/remove_from_placement_group";
    };
    remove_from_resources_requestSchema: {
        readonly properties: {
            readonly remove_from: {
                readonly description: "Resources the Firewall should be removed from";
                readonly items: {
                    readonly $ref: "#/components/schemas/firewall_resource";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["remove_from"];
        readonly title: "RemoveFromResourcesRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/remove_from_resources";
    };
    remove_from_resources_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["actions"];
        readonly title: "ActionListResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/remove_from_resources";
    };
    remove_target_requestSchema: {
        readonly properties: {
            readonly ip: {
                readonly description: "IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type \"ip\".";
                readonly properties: {
                    readonly ip: {
                        readonly description: "IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.";
                        readonly example: "203.0.113.1";
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["ip"];
                readonly title: "LoadBalancerTargetIP";
                readonly type: "object";
            };
            readonly label_selector: {
                readonly $ref: "#/components/schemas/label_selector";
            };
            readonly server: {
                readonly additionalProperties: false;
                readonly description: "Configuration for type Server, required if type is `server`";
                readonly properties: {
                    readonly id: {
                        readonly description: "ID of the Server";
                        readonly example: 80;
                        readonly format: "int64";
                        readonly type: "integer";
                        readonly maximum: 9007199254740991;
                    };
                };
                readonly required: readonly ["id"];
                readonly type: "object";
            };
            readonly type: {
                readonly description: "Type of the resource";
                readonly enum: readonly ["ip", "label_selector", "server"];
                readonly type: "string";
            };
        };
        readonly required: readonly ["type"];
        readonly title: "RemoveTargetRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/remove_target";
    };
    remove_target_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/remove_target";
    };
    replace_certificate_requestSchema: {
        readonly properties: {
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "New Certificate name";
                readonly example: "my website cert";
                readonly type: "string";
            };
        };
        readonly title: "UpdateCertificateRequest";
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/certificates/{id}";
    };
    replace_certificate_responseSchema: {
        readonly properties: {
            readonly certificate: {
                readonly $ref: "#/components/schemas/certificate";
            };
        };
        readonly required: readonly ["certificate"];
        readonly title: "CertificateResponse";
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/certificates/{id}";
    };
    replace_firewall_requestSchema: {
        readonly properties: {
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "New Firewall name";
                readonly example: "new-name";
                readonly type: "string";
            };
        };
        readonly title: "UpdateFirewallRequest";
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/firewalls/{id}";
    };
    replace_firewall_responseSchema: {
        readonly properties: {
            readonly firewall: {
                readonly $ref: "#/components/schemas/firewall";
            };
        };
        readonly required: readonly ["firewall"];
        readonly title: "FirewallResponse";
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/firewalls/{id}";
    };
    replace_floating_ip_requestSchema: {
        readonly properties: {
            readonly description: {
                readonly description: "Description of the Resource.";
                readonly example: "This describes my resource";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the Resource. Must be unique per Project.";
                readonly example: "my-resource";
                readonly type: "string";
            };
        };
        readonly title: "FloatingIPUpdateRequest";
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/floating_ips/{id}";
    };
    replace_floating_ip_responseSchema: {
        readonly properties: {
            readonly floating_ip: {
                readonly $ref: "#/components/schemas/floating_ip";
            };
        };
        readonly required: readonly ["floating_ip"];
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/floating_ips/{id}";
    };
    replace_image_requestSchema: {
        readonly properties: {
            readonly description: {
                readonly description: "New description of Image";
                readonly example: "My new Image description";
                readonly type: "string";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly type: {
                readonly description: "Destination Image type to convert to";
                readonly enum: readonly ["snapshot"];
                readonly type: "string";
            };
        };
        readonly title: "UpdateImageRequest";
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/images/{id}";
    };
    replace_image_responseSchema: {
        readonly properties: {
            readonly image: {
                readonly $ref: "#/components/schemas/image";
            };
        };
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/images/{id}";
    };
    replace_load_balancer_requestSchema: {
        readonly properties: {
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "New Load Balancer name";
                readonly example: "new-name";
                readonly type: "string";
            };
        };
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/load_balancers/{id}";
    };
    replace_load_balancer_responseSchema: {
        readonly properties: {
            readonly load_balancer: {
                readonly $ref: "#/components/schemas/load_balancer";
            };
        };
        readonly required: readonly ["load_balancer"];
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/load_balancers/{id}";
    };
    replace_network_requestSchema: {
        readonly properties: {
            readonly expose_routes_to_vswitch: {
                readonly description: "Toggle to expose routes to the networks vSwitch.\n\nIndicates if the routes from this network should be exposed to the vSwitch in this network. Only takes effect if a vSwitch is setup in this network.\n";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "New network name";
                readonly example: "new-name";
                readonly type: "string";
            };
        };
        readonly title: "NetworkUpdateRequest";
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/networks/{id}";
    };
    replace_network_responseSchema: {
        readonly properties: {
            readonly network: {
                readonly $ref: "#/components/schemas/network";
            };
        };
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/networks/{id}";
    };
    replace_placementgroup_requestSchema: {
        readonly properties: {
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "New PlacementGroup name";
                readonly example: "my Placement Group";
                readonly type: "string";
            };
        };
        readonly title: "UpdatePlacementGroupRequest";
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/placement_groups/{id}";
    };
    replace_placementgroup_responseSchema: {
        readonly properties: {
            readonly placement_group: {
                readonly properties: {
                    readonly created: {
                        readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                        readonly example: "2016-01-30T23:55:00+00:00";
                        readonly type: "string";
                    };
                    readonly id: {
                        readonly description: "ID of the Placement Group.";
                        readonly example: 42;
                        readonly format: "int64";
                        readonly maximum: 9007199254740991;
                        readonly type: "integer";
                    };
                    readonly labels: {
                        readonly $ref: "#/components/schemas/labels";
                    };
                    readonly name: {
                        readonly description: "Name of the Resource. Must be unique per Project.";
                        readonly example: "my-resource";
                        readonly type: "string";
                    };
                    readonly servers: {
                        readonly description: "Array of IDs of Servers that are part of this Placement Group";
                        readonly example: readonly [42];
                        readonly items: {
                            readonly format: "int64";
                            readonly type: "integer";
                        };
                        readonly type: "array";
                    };
                    readonly type: {
                        readonly description: "Type of the Placement Group";
                        readonly enum: readonly ["spread"];
                        readonly example: "spread";
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["id", "name", "labels", "type", "created", "servers"];
                readonly title: "PlacementGroup";
                readonly type: "object";
            };
        };
        readonly required: readonly ["placement_group"];
        readonly title: "PlacementGroupResponse";
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/placement_groups/{id}";
    };
    replace_primary_ip_requestSchema: {
        readonly properties: {
            readonly auto_delete: {
                readonly description: "Delete this Primary IP when the resource it is assigned to is deleted";
                readonly example: true;
                readonly type: "boolean";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "New unique name to set";
                readonly example: "my-ip";
                readonly type: "string";
            };
        };
        readonly title: "UpdatePrimaryIPRequest";
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/primary_ips/{id}";
    };
    replace_primary_ip_responseSchema: {
        readonly properties: {
            readonly primary_ip: {
                readonly properties: {
                    readonly assignee_id: {
                        readonly description: "ID of the resource the Primary IP is assigned to, null if it is not assigned at all";
                        readonly example: 17;
                        readonly format: "int64";
                        readonly nullable: true;
                        readonly type: "integer";
                    };
                    readonly assignee_type: {
                        readonly description: "Resource type the Primary IP can be assigned to";
                        readonly enum: readonly ["server"];
                        readonly type: "string";
                    };
                    readonly auto_delete: {
                        readonly description: "Delete this Primary IP when the resource it is assigned to is deleted";
                        readonly example: true;
                        readonly type: "boolean";
                    };
                    readonly blocked: {
                        readonly description: "Whether the IP is blocked";
                        readonly example: false;
                        readonly type: "boolean";
                    };
                    readonly created: {
                        readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                        readonly example: "2016-01-30T23:55:00+00:00";
                        readonly type: "string";
                    };
                    readonly datacenter: {
                        readonly $ref: "#/components/schemas/datacenter";
                    };
                    readonly dns_ptr: {
                        readonly description: "Array of reverse DNS entries";
                        readonly items: {
                            readonly $ref: "#/components/schemas/dns_ptr";
                        };
                        readonly type: "array";
                    };
                    readonly id: {
                        readonly description: "ID of the Primary IP.";
                        readonly example: 42;
                        readonly format: "int64";
                        readonly maximum: 9007199254740991;
                        readonly type: "integer";
                    };
                    readonly ip: {
                        readonly description: "IP address.";
                        readonly example: "131.232.99.1";
                        readonly type: "string";
                    };
                    readonly labels: {
                        readonly $ref: "#/components/schemas/labels";
                    };
                    readonly name: {
                        readonly description: "Name of the Resource. Must be unique per Project.";
                        readonly example: "my-resource";
                        readonly type: "string";
                    };
                    readonly protection: {
                        readonly $ref: "#/components/schemas/protection";
                    };
                    readonly type: {
                        readonly $ref: "#/components/schemas/ip_type";
                    };
                };
                readonly required: readonly ["id", "name", "labels", "created", "blocked", "datacenter", "ip", "dns_ptr", "protection", "type", "auto_delete", "assignee_type", "assignee_id"];
                readonly title: "PrimaryIP";
                readonly type: "object";
            };
        };
        readonly required: readonly ["primary_ip"];
        readonly title: "PrimaryIPResponse";
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/primary_ips/{id}";
    };
    replace_server_requestSchema: {
        readonly properties: {
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "New name to set";
                readonly example: "my-server";
                readonly type: "string";
            };
        };
        readonly title: "UpdateServerRequest";
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/servers/{id}";
    };
    replace_server_responseSchema: {
        readonly properties: {
            readonly server: {
                readonly $ref: "#/components/schemas/server";
            };
        };
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/servers/{id}";
    };
    replace_ssh_key_requestSchema: {
        readonly properties: {
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "New name Name to set";
                readonly example: "My ssh key";
                readonly type: "string";
            };
        };
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/ssh_keys/{id}";
    };
    replace_ssh_key_responseSchema: {
        readonly properties: {
            readonly ssh_key: {
                readonly $ref: "#/components/schemas/ssh_key";
            };
        };
        readonly required: readonly ["ssh_key"];
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/ssh_keys/{id}";
    };
    replace_volume_requestSchema: {
        readonly properties: {
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "New Volume name";
                readonly example: "database-storage";
                readonly type: "string";
            };
        };
        readonly title: "UpdateVolumeRequest";
        readonly type: "object";
        readonly description: "Request for PUT https://api.hetzner.cloud/v1/volumes/{id}";
    };
    replace_volume_responseSchema: {
        readonly properties: {
            readonly volume: {
                readonly $ref: "#/components/schemas/volume";
            };
        };
        readonly required: readonly ["volume"];
        readonly type: "object";
        readonly description: "Response to PUT https://api.hetzner.cloud/v1/volumes/{id}";
    };
    request_console_for_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly password: {
                readonly description: "VNC password to use for this connection (this password only works in combination with a wss_url with valid token)";
                readonly example: "9MQaTg2VAGI0FIpc10k3UpRXcHj2wQ6x";
                readonly type: "string";
            };
            readonly wss_url: {
                readonly description: "URL of websocket proxy to use; this includes a token which is valid for a limited time only";
                readonly example: "wss://console.hetzner.cloud/?server_id=1&token=3db32d15-af2f-459c-8bf8-dee1fd05f49c";
                readonly type: "string";
            };
        };
        readonly required: readonly ["wss_url", "password", "action"];
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/request_console";
    };
    reset_root_password_of_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
            readonly root_password: {
                readonly description: "Password that will be set for this Server once the Action succeeds";
                readonly example: "zCWbFhnu950dUTko5f40";
                readonly type: "string";
            };
        };
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/reset_password";
    };
    reset_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/reset";
    };
    resize_volume_requestSchema: {
        readonly properties: {
            readonly size: {
                readonly description: "New Volume size in GB (must be greater than current size)";
                readonly example: 50;
                readonly type: "number";
            };
        };
        readonly required: readonly ["size"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/volumes/{id}/actions/resize";
    };
    resize_volume_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/volumes/{id}/actions/resize";
    };
    resourceSchema: {
        readonly properties: {
            readonly id: {
                readonly description: "ID of the Resource. | ID of resource referenced";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly type: {
                readonly description: "Type of the Resource. | Type of resource referenced";
                readonly example: "server";
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "type"];
        readonly type: "object";
    };
    resource_idSchema: {
        readonly properties: {
            readonly id: {
                readonly description: "ID of the Server. | ID of the Server";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
        };
        readonly required: readonly ["id"];
        readonly type: "object";
        readonly description: "ID of the Resource";
    };
    retry_issuance_or_renewal_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/certificates/{id}/actions/retry";
    };
    routeSchema: {
        readonly properties: {
            readonly destination: {
                readonly description: "Destination network or host of the route.\n\nPackages addressed for IPs matching the destination IP prefix will be send to the specified gateway.\n\nMust be one of\n* private IPv4 ranges of RFC1918\n* or `0.0.0.0/0`.\n\nMust not overlap with\n* an existing ip_range in any subnets\n* or with any destinations in other routes\n* or with `172.31.1.1`.\n\n`172.31.1.1` is being used as a gateway for the public network interface of Servers.\n";
                readonly example: "10.100.1.0/24";
                readonly type: "string";
            };
            readonly gateway: {
                readonly description: "Gateway of the route.\n\nPackages addressed for the specified destination will be send to this IP address.\n\nCannot be\n* the first IP of the networks ip_range,\n* an IP behind a vSwitch or\n* `172.31.1.1`.\n\n`172.31.1.1` is being used as a gateway for the public network interface of Servers.\n";
                readonly example: "10.0.1.1";
                readonly type: "string";
            };
        };
        readonly required: readonly ["destination", "gateway"];
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/add_route | Request for POST https://api.hetzner.cloud/v1/networks/{id}/actions/delete_route";
    };
    ruleSchema: {
        readonly properties: {
            readonly description: {
                readonly description: "Description of the Rule";
                readonly maxLength: 255;
                readonly nullable: true;
                readonly type: "string";
            };
            readonly destination_ips: {
                readonly description: "List of permitted IPv4/IPv6 addresses for outgoing traffic (`direction` set to `out`)\nin [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR\nblocks at most.\n\nThe CIDR blocks may refer to networks (with empty host bits) or single hosts.\nFor example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,\nand a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.\nUse `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.\n";
                readonly example: readonly [];
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
            readonly direction: {
                readonly description: "Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.";
                readonly enum: readonly ["in", "out"];
                readonly example: "in";
                readonly type: "string";
            };
            readonly port: {
                readonly description: "Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.";
                readonly example: "80";
                readonly type: "string";
                readonly nullable: true;
            };
            readonly protocol: {
                readonly description: "Type of traffic to allow";
                readonly enum: readonly ["esp", "gre", "icmp", "tcp", "udp"];
                readonly type: "string";
            };
            readonly source_ips: {
                readonly description: "List of permitted IPv4/IPv6 addresses for incoming traffic (`direction` set to `in`)\nin [CIDR block notation](https://wikipedia.org/wiki/CIDR). You can specify 100 CIDR\nblocks at most.\n\nThe CIDR blocks may refer to networks (with empty host bits) or single hosts.\nFor example, a network could be defined with `10.0.1.0/24` or `2001:db8:ff00:42::/64`,\nand a single host with `10.0.1.1/32` or `2001:db8:ff00:42::8329/128`.\nUse `0.0.0.0/0` to allow any IPv4 addresses and `::/0` to allow any IPv6 addresses.\n";
                readonly example: readonly ["28.239.13.1/32", "28.239.14.0/24", "ff21:1eac:9a3b:ee58:5ca:990c:8bc9:c03b/128"];
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["direction", "protocol"];
        readonly title: "Rule";
        readonly type: "object";
        readonly description: "Rule of a firewall.";
    };
    selected_targetSchema: {
        readonly properties: {
            readonly health_status: {
                readonly description: "List of health statuses of the services on this target. Only present for target types \"server\" and \"ip\".";
                readonly items: {
                    readonly $ref: "#/components/schemas/health_status";
                };
                readonly title: "LoadBalancerTargetHealthStatus";
                readonly type: "array";
            };
            readonly server: {
                readonly $ref: "#/components/schemas/resource_id";
            };
            readonly type: {
                readonly description: "Type of the resource. Here always \"server\".";
                readonly example: "server";
                readonly type: "string";
            };
            readonly use_private_ip: {
                readonly default: false;
                readonly description: "Use the private network IP instead of the public IP. Only present for target types \"server\" and \"label_selector\".";
                readonly title: "LoadBalancerTargetUsePrivateIP";
                readonly type: "boolean";
            };
        };
        readonly title: "LoadBalancerTargetTarget";
        readonly type: "object";
    };
    serverSchema: {
        readonly properties: {
            readonly backup_window: {
                readonly description: "Time window (UTC) in which the backup will run, or null if the backups are not enabled";
                readonly example: "22-02";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly created: {
                readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly datacenter: {
                readonly $ref: "#/components/schemas/datacenter";
            };
            readonly id: {
                readonly description: "ID of the Server.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly image: {
                readonly $ref: "#/components/schemas/image_optional";
            };
            readonly included_traffic: {
                readonly description: "Free Traffic for the current billing period in bytes";
                readonly example: 654321;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly ingoing_traffic: {
                readonly description: "Inbound Traffic for the current billing period in bytes";
                readonly example: 123456;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly iso: {
                readonly $ref: "#/components/schemas/iso_optional";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly load_balancers: {
                readonly description: "Load Balancer IDs assigned to the server.";
                readonly items: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly type: "array";
            };
            readonly locked: {
                readonly description: "True if Server has been locked and is not available to user";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly name: {
                readonly description: "Name of the Server (must be unique per Project and a valid hostname as per RFC 1123)";
                readonly example: "my-resource";
                readonly type: "string";
            };
            readonly outgoing_traffic: {
                readonly description: "Outbound Traffic for the current billing period in bytes";
                readonly example: 123456;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly placement_group: {
                readonly description: "The placement group the server is assigned to.";
                readonly nullable: true;
                readonly properties: {
                    readonly created: {
                        readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                        readonly example: "2016-01-30T23:55:00+00:00";
                        readonly type: "string";
                    };
                    readonly id: {
                        readonly description: "ID of the Placement Group.";
                        readonly example: 42;
                        readonly format: "int64";
                        readonly maximum: 9007199254740991;
                        readonly type: "integer";
                    };
                    readonly labels: {
                        readonly $ref: "#/components/schemas/labels";
                    };
                    readonly name: {
                        readonly description: "Name of the Resource. Must be unique per Project.";
                        readonly example: "my-resource";
                        readonly type: "string";
                    };
                    readonly servers: {
                        readonly description: "Array of IDs of Servers that are part of this Placement Group";
                        readonly example: readonly [42];
                        readonly items: {
                            readonly format: "int64";
                            readonly type: "integer";
                        };
                        readonly type: "array";
                    };
                    readonly type: {
                        readonly description: "Type of the Placement Group";
                        readonly enum: readonly ["spread"];
                        readonly example: "spread";
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["id", "name", "labels", "type", "created", "servers"];
                readonly title: "PlacementGroupNullable";
                readonly type: "object";
            };
            readonly primary_disk_size: {
                readonly description: "Size of the primary Disk";
                readonly example: 50;
                readonly type: "integer";
            };
            readonly private_net: {
                readonly description: "Private networks information";
                readonly items: {
                    readonly $ref: "#/components/schemas/server_private_net";
                };
                readonly type: "array";
            };
            readonly protection: {
                readonly $ref: "#/components/schemas/server_protection";
            };
            readonly public_net: {
                readonly $ref: "#/components/schemas/server_public_net";
            };
            readonly rescue_enabled: {
                readonly description: "True if rescue mode is enabled. Server will then boot into rescue system on next reboot";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly server_type: {
                readonly $ref: "#/components/schemas/server_type";
            };
            readonly status: {
                readonly description: "Status of the Server";
                readonly enum: readonly ["deleting", "initializing", "migrating", "off", "rebuilding", "running", "starting", "stopping", "unknown"];
                readonly type: "string";
            };
            readonly volumes: {
                readonly description: "IDs of Volumes assigned to this Server";
                readonly items: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["id", "name", "status", "created", "public_net", "private_net", "server_type", "datacenter", "image", "iso", "rescue_enabled", "locked", "backup_window", "outgoing_traffic", "ingoing_traffic", "included_traffic", "protection", "labels", "primary_disk_size"];
        readonly type: "object";
        readonly description: "Servers are virtual machines that can be provisioned.";
    };
    server_private_netSchema: {
        readonly properties: {
            readonly alias_ips: {
                readonly description: "Additional IP addresses of the server on the network.";
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
            readonly ip: {
                readonly description: "The server IP address on the network.";
                readonly example: "10.0.0.2";
                readonly type: "string";
            };
            readonly mac_address: {
                readonly description: "The server MAC address on the network.";
                readonly example: "86:00:ff:2a:7d:e1";
                readonly type: "string";
            };
            readonly network: {
                readonly description: "The Network ID the server is attached to.";
                readonly example: 4711;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly type: "object";
    };
    server_protectionSchema: {
        readonly description: "Protection configuration for the Server";
        readonly properties: {
            readonly delete: {
                readonly description: "If true, prevents the Server from being deleted";
                readonly example: false;
                readonly type: "boolean";
            };
            readonly rebuild: {
                readonly description: "If true, prevents the Server from being rebuilt";
                readonly example: false;
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["delete", "rebuild"];
        readonly type: "object";
    };
    server_public_netSchema: {
        readonly description: "Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`";
        readonly properties: {
            readonly firewalls: {
                readonly description: "Firewalls applied to the public network interface of this Server";
                readonly items: {
                    readonly properties: {
                        readonly id: {
                            readonly description: "ID of the Firewall.";
                            readonly example: 42;
                            readonly format: "int64";
                            readonly maximum: 9007199254740991;
                            readonly type: "integer";
                        };
                        readonly status: {
                            readonly description: "Status of the Firewall on the Server";
                            readonly enum: readonly ["applied", "pending"];
                            readonly example: "applied";
                            readonly type: "string";
                        };
                    };
                    readonly title: "ServerPublicNetFirewall";
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly floating_ips: {
                readonly description: "IDs of Floating IPs assigned to this Server";
                readonly example: readonly [478];
                readonly items: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly type: "array";
            };
            readonly ipv4: {
                readonly $ref: "#/components/schemas/ipv4";
            };
            readonly ipv6: {
                readonly $ref: "#/components/schemas/ipv6";
            };
        };
        readonly required: readonly ["ipv4", "ipv6", "floating_ips"];
        readonly type: "object";
    };
    server_typeSchema: {
        readonly properties: {
            readonly architecture: {
                readonly $ref: "#/components/schemas/architecture";
            };
            readonly cores: {
                readonly description: "Number of cpu cores a Server of this type will have";
                readonly example: 1;
                readonly type: "integer";
            };
            readonly cpu_type: {
                readonly description: "Type of cpu";
                readonly enum: readonly ["dedicated", "shared"];
                readonly type: "string";
            };
            readonly deprecated: {
                readonly description: "This field is deprecated. Use the deprecation object instead";
                readonly example: false;
                readonly type: "boolean";
                readonly nullable: true;
            };
            readonly deprecation: {
                readonly $ref: "#/components/schemas/deprecation_info";
            };
            readonly description: {
                readonly description: "Description of the Server type";
                readonly example: "CX11";
                readonly type: "string";
            };
            readonly disk: {
                readonly description: "Disk size a Server of this type will have in GB";
                readonly example: 24;
                readonly type: "number";
            };
            readonly id: {
                readonly description: "ID of the Server type";
                readonly example: 1;
                readonly format: "int64";
                readonly type: "integer";
                readonly maximum: 9007199254740991;
            };
            readonly included_traffic: {
                readonly deprecated: true;
                readonly description: "**Deprecated**: This field is deprecated and set to `null` since 5 August 2024.\nPlease refer to the `included_traffic` field in `prices` instead.\nLearn more about this change in [the Changelog](https://docs.hetzner.cloud/changelog#2024-07-25-cloud-api-returns-traffic-information-in-different-format).\n";
                readonly example: null;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly memory: {
                readonly description: "Memory a Server of this type will have in GB";
                readonly example: 1;
                readonly type: "number";
            };
            readonly name: {
                readonly description: "Unique identifier of the Server type";
                readonly example: "cx11";
                readonly type: "string";
            };
            readonly prices: {
                readonly description: "Prices in different Locations";
                readonly items: {
                    readonly $ref: "#/components/schemas/price_per_time";
                };
                readonly type: "array";
            };
            readonly storage_type: {
                readonly description: "Type of Server boot drive. Local has higher speed. Network has better availability.";
                readonly enum: readonly ["local", "network"];
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "name", "description", "cores", "memory", "disk", "deprecated", "prices", "storage_type", "cpu_type", "architecture", "included_traffic"];
        readonly type: "object";
    };
    set_rules_requestSchema: {
        readonly properties: {
            readonly rules: {
                readonly description: "Array of rules.\n\nLimited to a maximum of 50 rules per Firewall.\n";
                readonly items: {
                    readonly $ref: "#/components/schemas/rule";
                };
                readonly maxItems: 50;
                readonly type: "array";
            };
        };
        readonly required: readonly ["rules"];
        readonly title: "SetRulesRequest";
        readonly type: "object";
        readonly description: "Request for POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/set_rules";
    };
    set_rules_responseSchema: {
        readonly properties: {
            readonly actions: {
                readonly items: {
                    readonly $ref: "#/components/schemas/action";
                };
                readonly type: "array";
            };
        };
        readonly required: readonly ["actions"];
        readonly title: "ActionListResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/firewalls/{id}/actions/set_rules";
    };
    shutdown_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/shutdown";
    };
    soft_reboot_server_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/servers/{id}/actions/reboot";
    };
    ssh_keySchema: {
        readonly properties: {
            readonly created: {
                readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly fingerprint: {
                readonly description: "Fingerprint of public key";
                readonly example: "b7:2f:30:a0:2f:6c:58:6c:21:04:58:61:ba:06:3b:2f";
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the SSH Key.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly name: {
                readonly description: "Name of the Resource. Must be unique per Project.";
                readonly example: "my-resource";
                readonly type: "string";
            };
            readonly public_key: {
                readonly description: "Public key";
                readonly example: "ssh-rsa AAAjjk76kgf...Xt";
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "name", "fingerprint", "public_key", "labels", "created"];
        readonly type: "object";
        readonly description: "SSH keys are public keys you provide to the cloud system. They can be injected into Servers at creation time. We highly recommend that you use keys instead of passwords to manage your Servers.";
    };
    subnetSchema: {
        readonly properties: {
            readonly ip_range: {
                readonly description: "IP range in CIDR block notation of the whole subnetwork.\n\nMust be a subnet of the parent Network `ip_range`.\n\nMust not overlap with any other subnets or with any destinations in routes.\n\nMinimum network size is /30. We highly recommend that you pick a larger network with a /24 netmask.\n";
                readonly example: "10.0.1.0/24";
                readonly type: "string";
            };
            readonly network_zone: {
                readonly description: "Name of Network zone.\n\nThe Location object contains the `network_zone` property each Location belongs to.\n | Name of Network Zone.\n\nThe Location object contains the `network_zone` it belongs to.\n";
                readonly example: "eu-central";
                readonly type: "string";
            };
            readonly type: {
                readonly description: "Type of Subnetwork.\n\n- `cloud` - Used to connect cloud servers and load balancers.\n- `server` - Same as the `cloud` type. **Deprecated**, use the `cloud` type instead.\n- `vswitch` - Used to [connect cloud servers and load balancers with dedicated servers](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch).\n";
                readonly enum: readonly ["cloud", "server", "vswitch"];
                readonly type: "string";
            };
            readonly vswitch_id: {
                readonly description: "ID of the robot vSwitch.\n\nMust only be supplied for subnets of type vswitch.\n | ID of the robot vSwitch.\n\nMust be supplied if the Subnet is of type `vswitch`.\n";
                readonly example: 1000;
                readonly format: "int64";
                readonly type: "integer";
            };
        };
        readonly required: readonly ["type", "network_zone"];
        readonly type: "object";
        readonly description: "Subnets divide the ip_range from the parent Network object into multiple Subnetworks that you can use for different specific purposes.";
    };
    subnet_with_gatewaySchema: {
        readonly properties: {
            readonly gateway: {
                readonly description: "Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.";
                readonly example: "10.0.0.1";
                readonly type: "string";
            };
            readonly ip_range: {
                readonly description: "IP range in CIDR block notation of the whole subnetwork.";
                readonly example: "10.0.1.0/24";
                readonly type: "string";
            };
            readonly network_zone: {
                readonly description: "Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.";
                readonly example: "eu-central";
                readonly type: "string";
            };
            readonly type: {
                readonly description: "Type of Subnetwork.\n\n- `cloud` - Used to connect cloud servers and load balancers.\n- `server` - Same as the `cloud` type. **Deprecated**, use the `cloud` type instead.\n- `vswitch` - Used to [connect cloud servers and load balancers with dedicated servers](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch).\n";
                readonly enum: readonly ["cloud", "server", "vswitch"];
                readonly type: "string";
            };
            readonly vswitch_id: {
                readonly description: "ID of the robot vSwitch if the subnet is of type vswitch.";
                readonly example: 1000;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
        };
        readonly required: readonly ["type", "network_zone", "gateway"];
        readonly type: "object";
    };
    targetSchema: {
        readonly properties: {
            readonly health_status: {
                readonly description: "List of health statuses of the services on this target. Only present for target types \"server\" and \"ip\".";
                readonly items: {
                    readonly $ref: "#/components/schemas/health_status";
                };
                readonly title: "LoadBalancerTargetHealthStatus";
                readonly type: "array";
            };
            readonly ip: {
                readonly description: "IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type \"ip\".";
                readonly properties: {
                    readonly ip: {
                        readonly description: "IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.";
                        readonly example: "203.0.113.1";
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["ip"];
                readonly title: "LoadBalancerTargetIP";
                readonly type: "object";
            };
            readonly label_selector: {
                readonly $ref: "#/components/schemas/label_selector";
            };
            readonly server: {
                readonly $ref: "#/components/schemas/resource_id";
            };
            readonly targets: {
                readonly description: "List of resolved label selector target Servers. Only present for type \"label_selector\".";
                readonly items: {
                    readonly $ref: "#/components/schemas/selected_target";
                };
                readonly type: "array";
            };
            readonly type: {
                readonly description: "Type of the resource";
                readonly enum: readonly ["ip", "label_selector", "server"];
                readonly type: "string";
            };
            readonly use_private_ip: {
                readonly default: false;
                readonly description: "Use the private network IP instead of the public IP. Only present for target types \"server\" and \"label_selector\".";
                readonly title: "LoadBalancerTargetUsePrivateIP";
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["type"];
        readonly title: "LoadBalancerTarget";
        readonly type: "object";
        readonly description: "A target for a load balancer";
    };
    unassign_floating_ip_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/floating_ips/{id}/actions/unassign";
    };
    unassign_primary_ip_from_resource_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/primary_ips/{id}/actions/unassign";
    };
    update_load_balancer_serviceSchema: {
        readonly properties: {
            readonly destination_port: {
                readonly description: "Port the Load Balancer will balance to";
                readonly example: 80;
                readonly type: "integer";
            };
            readonly health_check: {
                readonly additionalProperties: false;
                readonly description: "Service health check";
                readonly properties: {
                    readonly http: {
                        readonly additionalProperties: false;
                        readonly description: "Additional configuration for protocol http";
                        readonly properties: {
                            readonly domain: {
                                readonly description: "Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.";
                                readonly example: "example.com";
                                readonly nullable: true;
                                readonly type: "string";
                            };
                            readonly path: {
                                readonly description: "HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.";
                                readonly example: "/";
                                readonly type: "string";
                            };
                            readonly response: {
                                readonly description: "String that must be contained in HTTP response in order to pass the health check";
                                readonly example: "{\"status\": \"ok\"}";
                                readonly type: "string";
                            };
                            readonly status_codes: {
                                readonly default: readonly ["2??", "3??"];
                                readonly description: "List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones.";
                                readonly example: readonly ["2??", "3??"];
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly type: "array";
                            };
                            readonly tls: {
                                readonly description: "Use HTTPS for health check";
                                readonly example: false;
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly interval: {
                        readonly description: "Time interval in seconds health checks are performed";
                        readonly example: 15;
                        readonly type: "integer";
                    };
                    readonly port: {
                        readonly description: "Port the health check will be performed on";
                        readonly example: 4711;
                        readonly type: "integer";
                    };
                    readonly protocol: {
                        readonly description: "Type of the health check";
                        readonly enum: readonly ["http", "tcp"];
                        readonly example: "http";
                        readonly type: "string";
                    };
                    readonly retries: {
                        readonly description: "Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again";
                        readonly example: 3;
                        readonly type: "integer";
                    };
                    readonly timeout: {
                        readonly description: "Time in seconds after an attempt is considered a timeout";
                        readonly example: 10;
                        readonly type: "integer";
                    };
                };
                readonly title: "UpdateLoadBalancerServiceHealthCheck";
                readonly type: "object";
            };
            readonly http: {
                readonly $ref: "#/components/schemas/http";
            };
            readonly listen_port: {
                readonly description: "Port the Load Balancer listens on";
                readonly example: 443;
                readonly type: "integer";
            };
            readonly protocol: {
                readonly description: "Protocol of the Load Balancer";
                readonly enum: readonly ["http", "https", "tcp"];
                readonly example: "https";
                readonly type: "string";
            };
            readonly proxyprotocol: {
                readonly description: "Is Proxyprotocol enabled or not";
                readonly example: false;
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["listen_port"];
        readonly title: "UpdateLoadBalancerService";
        readonly type: "object";
        readonly description: "An update to a service for a Load Balancer.";
    };
    update_service_requestSchema: {
        readonly $ref: "#/components/schemas/update_load_balancer_service";
    };
    update_service_responseSchema: {
        readonly properties: {
            readonly action: {
                readonly $ref: "#/components/schemas/action";
            };
        };
        readonly required: readonly ["action"];
        readonly title: "ActionResponse";
        readonly type: "object";
        readonly description: "Response to POST https://api.hetzner.cloud/v1/load_balancers/{id}/actions/update_service";
    };
    volumeSchema: {
        readonly properties: {
            readonly created: {
                readonly description: "Point in time when the Resource was created (in ISO-8601 format).";
                readonly example: "2016-01-30T23:55:00+00:00";
                readonly type: "string";
            };
            readonly format: {
                readonly description: "Filesystem of the Volume if formatted on creation, null if not formatted on creation";
                readonly example: "xfs";
                readonly nullable: true;
                readonly type: "string";
            };
            readonly id: {
                readonly description: "ID of the Volume.";
                readonly example: 42;
                readonly format: "int64";
                readonly maximum: 9007199254740991;
                readonly type: "integer";
            };
            readonly labels: {
                readonly $ref: "#/components/schemas/labels";
            };
            readonly linux_device: {
                readonly description: "Device path on the file system for the Volume";
                readonly example: "/dev/disk/by-id/scsi-0HC_Volume_4711";
                readonly type: "string";
            };
            readonly location: {
                readonly $ref: "#/components/schemas/location";
            };
            readonly name: {
                readonly description: "Name of the Resource. Must be unique per Project.";
                readonly example: "my-resource";
                readonly type: "string";
            };
            readonly protection: {
                readonly $ref: "#/components/schemas/protection";
            };
            readonly server: {
                readonly description: "ID of the Server the Volume is attached to, null if it is not attached at all";
                readonly example: 12;
                readonly format: "int64";
                readonly nullable: true;
                readonly type: "integer";
            };
            readonly size: {
                readonly description: "Size in GB of the Volume";
                readonly example: 42;
                readonly type: "number";
            };
            readonly status: {
                readonly description: "Current status of the Volume";
                readonly enum: readonly ["available", "creating"];
                readonly example: "available";
                readonly type: "string";
            };
        };
        readonly required: readonly ["id", "created", "name", "server", "location", "size", "linux_device", "protection", "labels", "status", "format"];
        readonly type: "object";
        readonly description: "A Volume is a highly-available, scalable, and SSD-based block storage for Servers. Pricing for Volumes depends on the Volume size and Location, not the actual used storage. Please see [Hetzner Wiki](https://wiki.hetzner.de/index.php/CloudServer/en#Volumes) for more details about Volumes.";
    };
    client: import("@hey-api/client-fetch").Client<Request, Response, unknown, import("@hey-api/client-fetch").RequestOptionsBase<false> & import("@hey-api/client-fetch").Config<false> & {
        headers: Headers;
    }>;
    listActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
    listCertificates: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListCertificatesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_certificates_response, unknown, ThrowOnError>;
    createCertificate: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreateCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_certificate_response, unknown, ThrowOnError>;
    deleteCertificate: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getCertificate: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_certificate_response, unknown, ThrowOnError>;
    replaceCertificate: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplaceCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_certificate_response, unknown, ThrowOnError>;
    listActionsForCertificate: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ListActionsForCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_for_certificate_response, unknown, ThrowOnError>;
    getActionForCertificate: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetActionForCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_for_certificate_response, unknown, ThrowOnError>;
    retryIssuanceOrRenewal: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.RetryIssuanceOrRenewalData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.retry_issuance_or_renewal_response, unknown, ThrowOnError>;
    listCertificateActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListCertificateActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getCertificateAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetCertificateActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
    listDatacenters: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListDatacentersData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_datacenters_response, unknown, ThrowOnError>;
    getDatacenter: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetDatacenterData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_datacenter_response, unknown, ThrowOnError>;
    listFirewalls: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListFirewallsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_firewalls_response, unknown, ThrowOnError>;
    createFirewall: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreateFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_firewall_response, unknown, ThrowOnError>;
    deleteFirewall: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getFirewall: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_firewall_response, unknown, ThrowOnError>;
    replaceFirewall: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplaceFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_firewall_response, unknown, ThrowOnError>;
    listActionsForFirewall: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ListActionsForFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_for_firewall_response, unknown, ThrowOnError>;
    getActionForFirewall: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetActionForFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_for_firewall_response, unknown, ThrowOnError>;
    applyToResources: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ApplyToResourcesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.apply_to_resources_response, unknown, ThrowOnError>;
    removeFromResources: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.RemoveFromResourcesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.remove_from_resources_response, unknown, ThrowOnError>;
    setRules: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.SetRulesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.set_rules_response, unknown, ThrowOnError>;
    listFirewallActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListFirewallActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getFirewallAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetFirewallActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
    listFloatingIps: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListFloatingIpsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_floating_ips_response, unknown, ThrowOnError>;
    createFloatingIp: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreateFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_floating_ip_response, unknown, ThrowOnError>;
    deleteFloatingIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getFloatingIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_floating_ip_response, unknown, ThrowOnError>;
    replaceFloatingIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplaceFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_floating_ip_response, unknown, ThrowOnError>;
    listActionsForFloatingIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ListActionsForFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_for_floating_ip_response, unknown, ThrowOnError>;
    getActionForFloatingIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetActionForFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_for_floating_ip_response, unknown, ThrowOnError>;
    assignFloatingIpToServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AssignFloatingIpToServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.assign_floating_ip_to_server_response, unknown, ThrowOnError>;
    changeReverseDnsRecordsForFloatingIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeReverseDnsRecordsForFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_reverse_dns_records_for_floating_ip_response, unknown, ThrowOnError>;
    changeFloatingIpProtection: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeFloatingIpProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_floating_ip_protection_response, unknown, ThrowOnError>;
    unassignFloatingIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.UnassignFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.unassign_floating_ip_response, unknown, ThrowOnError>;
    listFloatingIpActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListFloatingIpActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getFloatingIpAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetFloatingIpActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
    listImages: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListImagesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_images_response, unknown, ThrowOnError>;
    deleteImage: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getImage: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_image_response, unknown, ThrowOnError>;
    replaceImage: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplaceImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_image_response, unknown, ThrowOnError>;
    listActionsForImage: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ListActionsForImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_for_image_response, unknown, ThrowOnError>;
    getActionForImage: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetActionForImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_for_image_response, unknown, ThrowOnError>;
    changeImageProtection: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeImageProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_image_protection_response, unknown, ThrowOnError>;
    listImageActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListImageActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getImageAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetImageActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
    listIsos: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListIsosData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_isos_response, unknown, ThrowOnError>;
    getIso: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetIsoData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_iso_response, unknown, ThrowOnError>;
    listLoadBalancerTypes: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListLoadBalancerTypesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_load_balancer_types_response, unknown, ThrowOnError>;
    getLoadBalancerType: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetLoadBalancerTypeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_load_balancer_type_response, unknown, ThrowOnError>;
    listLoadBalancers: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListLoadBalancersData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_load_balancers_response, unknown, ThrowOnError>;
    createLoadBalancer: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreateLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_load_balancer_response, unknown, ThrowOnError>;
    deleteLoadBalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getLoadBalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_load_balancer_response, unknown, ThrowOnError>;
    replaceLoadBalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplaceLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_load_balancer_response, unknown, ThrowOnError>;
    listActionsForLoadBalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ListActionsForLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_for_load_balancer_response, unknown, ThrowOnError>;
    getActionForLoadBalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetActionForLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_for_load_balancer_response, unknown, ThrowOnError>;
    addService: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AddServiceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.add_service_response, unknown, ThrowOnError>;
    addTarget: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AddTargetData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.add_target_response, unknown, ThrowOnError>;
    attachLoadBalancerToNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AttachLoadBalancerToNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.attach_load_balancer_to_network_response, unknown, ThrowOnError>;
    changeAlgorithm: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeAlgorithmData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_algorithm_response, unknown, ThrowOnError>;
    changeReverseDnsEntryForThisLoadBalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeReverseDnsEntryForThisLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_reverse_dns_entry_for_this_load_balancer_response, unknown, ThrowOnError>;
    changeLoadBalancerProtection: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeLoadBalancerProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_load_balancer_protection_response, unknown, ThrowOnError>;
    changeTypeOfLoadBalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeTypeOfLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_type_of_load_balancer_response, unknown, ThrowOnError>;
    deleteService: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteServiceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.delete_service_response, unknown, ThrowOnError>;
    detachLoadBalancerFromNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DetachLoadBalancerFromNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.detach_load_balancer_from_network_response, unknown, ThrowOnError>;
    disablePublicInterfaceOfLoadBalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DisablePublicInterfaceOfLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.disable_public_interface_of_load_balancer_response, unknown, ThrowOnError>;
    enablePublicInterfaceOfLoadBalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.EnablePublicInterfaceOfLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.enable_public_interface_of_load_balancer_response, unknown, ThrowOnError>;
    removeTarget: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.RemoveTargetData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.remove_target_response, unknown, ThrowOnError>;
    updateService: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.UpdateServiceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.update_service_response, unknown, ThrowOnError>;
    getMetricsForLoadbalancer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetMetricsForLoadbalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_metrics_for_loadbalancer_response, unknown, ThrowOnError>;
    listLoadBalancerActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListLoadBalancerActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getLoadBalancerAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetLoadBalancerActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
    listLocations: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListLocationsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_locations_response, unknown, ThrowOnError>;
    getLocation: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetLocationData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_location_response, unknown, ThrowOnError>;
    listNetworks: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListNetworksData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_networks_response, unknown, ThrowOnError>;
    createNetwork: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreateNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_network_response, unknown, ThrowOnError>;
    deleteNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_network_response, unknown, ThrowOnError>;
    replaceNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplaceNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_network_response, unknown, ThrowOnError>;
    listActionsForNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ListActionsForNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_for_network_response, unknown, ThrowOnError>;
    getActionForNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetActionForNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_for_network_response, unknown, ThrowOnError>;
    addRouteToNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AddRouteToNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.add_route_to_network_response, unknown, ThrowOnError>;
    addSubnetToNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AddSubnetToNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.add_subnet_to_network_response, unknown, ThrowOnError>;
    changeIpRangeOfNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeIpRangeOfNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_ip_range_of_network_response, unknown, ThrowOnError>;
    changeNetworkProtection: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeNetworkProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_network_protection_response, unknown, ThrowOnError>;
    deleteRouteFromNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteRouteFromNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.delete_route_from_network_response, unknown, ThrowOnError>;
    deleteSubnetFromNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteSubnetFromNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.delete_subnet_from_network_response, unknown, ThrowOnError>;
    listNetworkActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListNetworkActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getNetworkAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetNetworkActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
    listPlacementgroups: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListPlacementgroupsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_placementgroups_response, unknown, ThrowOnError>;
    createPlacementgroup: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreatePlacementgroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_placementgroup_response, unknown, ThrowOnError>;
    deletePlacementgroup: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeletePlacementgroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getPlacementgroup: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetPlacementgroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_placementgroup_response, unknown, ThrowOnError>;
    replacePlacementgroup: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplacePlacementgroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_placementgroup_response, unknown, ThrowOnError>;
    listPrices: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_prices_response, unknown, ThrowOnError>;
    listPrimaryIps: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListPrimaryIpsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_primary_ips_response, unknown, ThrowOnError>;
    createPrimaryIp: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreatePrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_primary_ip_response, unknown, ThrowOnError>;
    deletePrimaryIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeletePrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getPrimaryIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetPrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_primary_ip_response, unknown, ThrowOnError>;
    replacePrimaryIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplacePrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_primary_ip_response, unknown, ThrowOnError>;
    assignPrimaryIpToResource: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AssignPrimaryIpToResourceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.assign_primary_ip_to_resource_response, unknown, ThrowOnError>;
    changeReverseDnsEntryForPrimaryIp: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeReverseDnsEntryForPrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_reverse_dns_entry_for_primary_ip_response, unknown, ThrowOnError>;
    changePrimaryIpProtection: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangePrimaryIpProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_primary_ip_protection_response, unknown, ThrowOnError>;
    unassignPrimaryIpFromResource: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.UnassignPrimaryIpFromResourceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.unassign_primary_ip_from_resource_response, unknown, ThrowOnError>;
    listPrimaryIpActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListPrimaryIpActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getPrimaryIpAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetPrimaryIpActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
    listServerTypes: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListServerTypesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_server_types_response, unknown, ThrowOnError>;
    getServerType: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetServerTypeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_server_type_response, unknown, ThrowOnError>;
    listServers: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListServersData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_servers_response, unknown, ThrowOnError>;
    createServer: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreateServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_server_response, unknown, ThrowOnError>;
    deleteServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.delete_server_response, unknown, ThrowOnError>;
    getServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_server_response, unknown, ThrowOnError>;
    replaceServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplaceServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_server_response, unknown, ThrowOnError>;
    listActionsForServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ListActionsForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_for_server_response, unknown, ThrowOnError>;
    getActionForServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetActionForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_for_server_response, unknown, ThrowOnError>;
    addServerToPlacementGroup: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AddServerToPlacementGroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.add_server_to_placement_group_response, unknown, ThrowOnError>;
    attachIsoToServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AttachIsoToServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.attach_iso_to_server_response, unknown, ThrowOnError>;
    attachServerToNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AttachServerToNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.attach_server_to_network_response, unknown, ThrowOnError>;
    changeAliasIpsOfNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeAliasIpsOfNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_alias_ips_of_network_response, unknown, ThrowOnError>;
    changeReverseDnsEntryForThisServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeReverseDnsEntryForThisServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_reverse_dns_entry_for_this_server_response, unknown, ThrowOnError>;
    changeServerProtection: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeServerProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_server_protection_response, unknown, ThrowOnError>;
    changeTypeOfServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeTypeOfServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_type_of_server_response, unknown, ThrowOnError>;
    createImageFromServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.CreateImageFromServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_image_from_server_response, unknown, ThrowOnError>;
    detachServerFromNetwork: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DetachServerFromNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.detach_server_from_network_response, unknown, ThrowOnError>;
    detachIsoFromServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DetachIsoFromServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.detach_iso_from_server_response, unknown, ThrowOnError>;
    disableBackupsForServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DisableBackupsForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.disable_backups_for_server_response, unknown, ThrowOnError>;
    disableRescueModeForServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DisableRescueModeForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.disable_rescue_mode_for_server_response, unknown, ThrowOnError>;
    enableAndConfigureBackupsForServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.EnableAndConfigureBackupsForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.enable_and_configure_backups_for_server_response, unknown, ThrowOnError>;
    enableRescueModeForServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.EnableRescueModeForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.enable_rescue_mode_for_server_response, unknown, ThrowOnError>;
    powerOffServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.PowerOffServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.power_off_server_response, unknown, ThrowOnError>;
    powerOnServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.PowerOnServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.power_on_server_response, unknown, ThrowOnError>;
    softRebootServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.SoftRebootServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.soft_reboot_server_response, unknown, ThrowOnError>;
    rebuildServerFromImage: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.RebuildServerFromImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.rebuild_server_from_image_response, unknown, ThrowOnError>;
    removeFromPlacementGroup: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.RemoveFromPlacementGroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.remove_from_placement_group_response, unknown, ThrowOnError>;
    requestConsoleForServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.RequestConsoleForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.request_console_for_server_response, unknown, ThrowOnError>;
    resetServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ResetServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.reset_server_response, unknown, ThrowOnError>;
    resetRootPasswordOfServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ResetRootPasswordOfServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.reset_root_password_of_server_response, unknown, ThrowOnError>;
    shutdownServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ShutdownServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.shutdown_server_response, unknown, ThrowOnError>;
    getMetricsForServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetMetricsForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_metrics_for_server_response, unknown, ThrowOnError>;
    listServerActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListServerActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getServerAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetServerActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
    listSshKeys: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListSshKeysData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_ssh_keys_response, unknown, ThrowOnError>;
    createSshKey: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreateSshKeyData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_ssh_key_response, unknown, ThrowOnError>;
    deleteSshKey: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteSshKeyData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getSshKey: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetSshKeyData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_ssh_key_response, unknown, ThrowOnError>;
    replaceSshKey: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplaceSshKeyData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_ssh_key_response, unknown, ThrowOnError>;
    listVolumes: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListVolumesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_volumes_response, unknown, ThrowOnError>;
    createVolume: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.CreateVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.create_volume_response, unknown, ThrowOnError>;
    deleteVolume: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DeleteVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
    getVolume: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_volume_response, unknown, ThrowOnError>;
    replaceVolume: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ReplaceVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.replace_volume_response, unknown, ThrowOnError>;
    listActionsForVolume: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ListActionsForVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_for_volume_response, unknown, ThrowOnError>;
    getActionForVolume: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetActionForVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_for_volume_response, unknown, ThrowOnError>;
    attachVolumeToServer: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.AttachVolumeToServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.attach_volume_to_server_response, unknown, ThrowOnError>;
    changeVolumeProtection: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ChangeVolumeProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.change_volume_protection_response, unknown, ThrowOnError>;
    detachVolume: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.DetachVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.detach_volume_response, unknown, ThrowOnError>;
    resizeVolume: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.ResizeVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.resize_volume_response, unknown, ThrowOnError>;
    listVolumeActions: <ThrowOnError extends boolean = false>(options?: import("@hey-api/client-fetch").Options<clientGenerated.ListVolumeActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.list_actions_response, unknown, ThrowOnError>;
    getVolumeAction: <ThrowOnError extends boolean = false>(options: import("@hey-api/client-fetch").Options<clientGenerated.GetVolumeActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<clientGenerated.get_action_response, unknown, ThrowOnError>;
};
export * from './client/index.js';
