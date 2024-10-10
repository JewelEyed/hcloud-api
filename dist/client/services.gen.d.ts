import { type Options } from '@hey-api/client-fetch';
import type { ListActionsData, GetActionData, ListCertificatesData, CreateCertificateData, DeleteCertificateData, GetCertificateData, ReplaceCertificateData, ListActionsForCertificateData, GetActionForCertificateData, RetryIssuanceOrRenewalData, ListCertificateActionsData, GetCertificateActionData, ListDatacentersData, GetDatacenterData, ListFirewallsData, CreateFirewallData, DeleteFirewallData, GetFirewallData, ReplaceFirewallData, ListActionsForFirewallData, GetActionForFirewallData, ApplyToResourcesData, RemoveFromResourcesData, SetRulesData, ListFirewallActionsData, GetFirewallActionData, ListFloatingIpsData, CreateFloatingIpData, DeleteFloatingIpData, GetFloatingIpData, ReplaceFloatingIpData, ListActionsForFloatingIpData, GetActionForFloatingIpData, AssignFloatingIpToServerData, ChangeReverseDnsRecordsForFloatingIpData, ChangeFloatingIpProtectionData, UnassignFloatingIpData, ListFloatingIpActionsData, GetFloatingIpActionData, ListImagesData, DeleteImageData, GetImageData, ReplaceImageData, ListActionsForImageData, GetActionForImageData, ChangeImageProtectionData, ListImageActionsData, GetImageActionData, ListIsosData, GetIsoData, ListLoadBalancerTypesData, GetLoadBalancerTypeData, ListLoadBalancersData, CreateLoadBalancerData, DeleteLoadBalancerData, GetLoadBalancerData, ReplaceLoadBalancerData, ListActionsForLoadBalancerData, GetActionForLoadBalancerData, AddServiceData, AddTargetData, AttachLoadBalancerToNetworkData, ChangeAlgorithmData, ChangeReverseDnsEntryForThisLoadBalancerData, ChangeLoadBalancerProtectionData, ChangeTypeOfLoadBalancerData, DeleteServiceData, DetachLoadBalancerFromNetworkData, DisablePublicInterfaceOfLoadBalancerData, EnablePublicInterfaceOfLoadBalancerData, RemoveTargetData, UpdateServiceData, GetMetricsForLoadbalancerData, ListLoadBalancerActionsData, GetLoadBalancerActionData, ListLocationsData, GetLocationData, ListNetworksData, CreateNetworkData, DeleteNetworkData, GetNetworkData, ReplaceNetworkData, ListActionsForNetworkData, GetActionForNetworkData, AddRouteToNetworkData, AddSubnetToNetworkData, ChangeIpRangeOfNetworkData, ChangeNetworkProtectionData, DeleteRouteFromNetworkData, DeleteSubnetFromNetworkData, ListNetworkActionsData, GetNetworkActionData, ListPlacementgroupsData, CreatePlacementgroupData, DeletePlacementgroupData, GetPlacementgroupData, ReplacePlacementgroupData, ListPrimaryIpsData, CreatePrimaryIpData, DeletePrimaryIpData, GetPrimaryIpData, ReplacePrimaryIpData, AssignPrimaryIpToResourceData, ChangeReverseDnsEntryForPrimaryIpData, ChangePrimaryIpProtectionData, UnassignPrimaryIpFromResourceData, ListPrimaryIpActionsData, GetPrimaryIpActionData, ListServerTypesData, GetServerTypeData, ListServersData, CreateServerData, DeleteServerData, GetServerData, ReplaceServerData, ListActionsForServerData, GetActionForServerData, AddServerToPlacementGroupData, AttachIsoToServerData, AttachServerToNetworkData, ChangeAliasIpsOfNetworkData, ChangeReverseDnsEntryForThisServerData, ChangeServerProtectionData, ChangeTypeOfServerData, CreateImageFromServerData, DetachServerFromNetworkData, DetachIsoFromServerData, DisableBackupsForServerData, DisableRescueModeForServerData, EnableAndConfigureBackupsForServerData, EnableRescueModeForServerData, PowerOffServerData, PowerOnServerData, SoftRebootServerData, RebuildServerFromImageData, RemoveFromPlacementGroupData, RequestConsoleForServerData, ResetServerData, ResetRootPasswordOfServerData, ShutdownServerData, GetMetricsForServerData, ListServerActionsData, GetServerActionData, ListSshKeysData, CreateSshKeyData, DeleteSshKeyData, GetSshKeyData, ReplaceSshKeyData, ListVolumesData, CreateVolumeData, DeleteVolumeData, GetVolumeData, ReplaceVolumeData, ListActionsForVolumeData, GetActionForVolumeData, AttachVolumeToServerData, ChangeVolumeProtectionData, DetachVolumeData, ResizeVolumeData, ListVolumeActionsData, GetVolumeActionData } from './types.gen.js';
export declare const client: import("@hey-api/client-fetch").Client<Request, Response, unknown, import("@hey-api/client-fetch").RequestOptionsBase<false> & import("@hey-api/client-fetch").Config<false> & {
    headers: Headers;
}>;
/**
 * Get all Actions
 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
 */
export declare const listActions: <ThrowOnError extends boolean = false>(options?: Options<ListActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a specific Action object.
 */
export declare const getAction: <ThrowOnError extends boolean = false>(options: Options<GetActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
/**
 * Get all Certificates
 * Returns all Certificate objects.
 */
export declare const listCertificates: <ThrowOnError extends boolean = false>(options?: Options<ListCertificatesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_certificates_response, unknown, ThrowOnError>;
/**
 * Create a Certificate
 * Creates a new Certificate.
 *
 * The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.
 *
 * In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.
 *
 * For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.
 *
 */
export declare const createCertificate: <ThrowOnError extends boolean = false>(options?: Options<CreateCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_certificate_response, unknown, ThrowOnError>;
/**
 * Delete a Certificate
 * Deletes a Certificate.
 */
export declare const deleteCertificate: <ThrowOnError extends boolean = false>(options: Options<DeleteCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get a Certificate
 * Gets a specific Certificate object.
 */
export declare const getCertificate: <ThrowOnError extends boolean = false>(options: Options<GetCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_certificate_response, unknown, ThrowOnError>;
/**
 * Update a Certificate
 * Updates the Certificate properties.
 *
 * Note that when updating labels, the Certificate’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 *
 * Note: if the Certificate object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const replaceCertificate: <ThrowOnError extends boolean = false>(options: Options<ReplaceCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_certificate_response, unknown, ThrowOnError>;
/**
 * Get all Actions for a Certificate
 * Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
 *
 * Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.
 *
 */
export declare const listActionsForCertificate: <ThrowOnError extends boolean = false>(options: Options<ListActionsForCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_for_certificate_response, unknown, ThrowOnError>;
/**
 * Get an Action for a Certificate
 * Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.
 */
export declare const getActionForCertificate: <ThrowOnError extends boolean = false>(options: Options<GetActionForCertificateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_for_certificate_response, unknown, ThrowOnError>;
/**
 * Retry Issuance or Renewal
 * Retry a failed Certificate issuance or renewal.
 *
 * Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.
 *
 * #### Call specific error codes
 *
 * | Code                                                    | Description                                                               |
 * |---------------------------------------------------------|---------------------------------------------------------------------------|
 * | `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
 * | `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
 * | `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
 * | `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
 * | `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
 * | `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
 * | `dns_zone_not_found`                                    | DNS zone not found                                                        |
 * | `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |
 *
 */
export declare const retryIssuanceOrRenewal: <ThrowOnError extends boolean = false>(options: Options<RetryIssuanceOrRenewalData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").retry_issuance_or_renewal_response, unknown, ThrowOnError>;
/**
 * Get all Actions
 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.
 */
export declare const listCertificateActions: <ThrowOnError extends boolean = false>(options?: Options<ListCertificateActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a specific Action object.
 */
export declare const getCertificateAction: <ThrowOnError extends boolean = false>(options: Options<GetCertificateActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
/**
 * Get all Datacenters
 * Returns all [Datacenters](#datacenters).
 */
export declare const listDatacenters: <ThrowOnError extends boolean = false>(options?: Options<ListDatacentersData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_datacenters_response, unknown, ThrowOnError>;
/**
 * Get a Datacenter
 * Returns a single [Datacenter](#datacenters).
 */
export declare const getDatacenter: <ThrowOnError extends boolean = false>(options: Options<GetDatacenterData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_datacenter_response, unknown, ThrowOnError>;
/**
 * Get all Firewalls
 * Returns all Firewall objects.
 */
export declare const listFirewalls: <ThrowOnError extends boolean = false>(options?: Options<ListFirewallsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_firewalls_response, unknown, ThrowOnError>;
/**
 * Create a Firewall
 * Creates a new Firewall.
 *
 * #### Call specific error codes
 *
 * | Code                          | Description                                                   |
 * |------------------------------ |-------------------------------------------------------------- |
 * | `server_already_added`        | Server added more than one time to resource                   |
 * | `incompatible_network_type`   | The Network type is incompatible for the given resource       |
 * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
 *
 */
export declare const createFirewall: <ThrowOnError extends boolean = false>(options?: Options<CreateFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_firewall_response, unknown, ThrowOnError>;
/**
 * Delete a Firewall
 * Deletes a Firewall.
 *
 * #### Call specific error codes
 *
 * | Code                 | Description                               |
 * |--------------------- |-------------------------------------------|
 * | `resource_in_use`    | Firewall must not be in use to be deleted |
 *
 */
export declare const deleteFirewall: <ThrowOnError extends boolean = false>(options: Options<DeleteFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get a Firewall
 * Gets a specific Firewall object.
 */
export declare const getFirewall: <ThrowOnError extends boolean = false>(options: Options<GetFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_firewall_response, unknown, ThrowOnError>;
/**
 * Update a Firewall
 * Updates the Firewall.
 *
 * Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 *
 * Note: if the Firewall object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const replaceFirewall: <ThrowOnError extends boolean = false>(options: Options<ReplaceFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_firewall_response, unknown, ThrowOnError>;
/**
 * Get all Actions for a Firewall
 * Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
 */
export declare const listActionsForFirewall: <ThrowOnError extends boolean = false>(options: Options<ListActionsForFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_for_firewall_response, unknown, ThrowOnError>;
/**
 * Get an Action for a Firewall
 * Returns a specific Action for a Firewall.
 */
export declare const getActionForFirewall: <ThrowOnError extends boolean = false>(options: Options<GetActionForFirewallData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_for_firewall_response, unknown, ThrowOnError>;
/**
 * Apply to Resources
 * Applies one Firewall to multiple resources.
 *
 * Currently servers (public network interface) and label selectors are supported.
 *
 * #### Call specific error codes
 *
 * | Code                          | Description                                                   |
 * |-------------------------------|---------------------------------------------------------------|
 * | `firewall_already_applied`    | Firewall was already applied on resource                      |
 * | `incompatible_network_type`   | The Network type is incompatible for the given resource       |
 * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
 *
 */
export declare const applyToResources: <ThrowOnError extends boolean = false>(options: Options<ApplyToResourcesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").apply_to_resources_response, unknown, ThrowOnError>;
/**
 * Remove from Resources
 * Removes one Firewall from multiple resources.
 *
 * Currently only Servers (and their public network interfaces) are supported.
 *
 * #### Call specific error codes
 *
 * | Code                                  | Description                                                            |
 * |---------------------------------------|------------------------------------------------------------------------|
 * | `firewall_already_removed`            | Firewall was already removed from the resource                         |
 * | `firewall_resource_not_found`         | The resource the Firewall should be attached to was not found          |
 * | `firewall_managed_by_label_selector`  | Firewall was applied via label selector and cannot be removed manually |
 *
 */
export declare const removeFromResources: <ThrowOnError extends boolean = false>(options: Options<RemoveFromResourcesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").remove_from_resources_response, unknown, ThrowOnError>;
/**
 * Set Rules
 * Sets the rules of a Firewall.
 *
 * All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
 * The maximum amount of rules that can be defined is 50.
 *
 * #### Call specific error codes
 *
 * | Code                          | Description                                                   |
 * |-------------------------------|---------------------------------------------------------------|
 * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
 *
 */
export declare const setRules: <ThrowOnError extends boolean = false>(options: Options<SetRulesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").set_rules_response, unknown, ThrowOnError>;
/**
 * Get all Actions
 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.
 */
export declare const listFirewallActions: <ThrowOnError extends boolean = false>(options?: Options<ListFirewallActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a specific Action object.
 */
export declare const getFirewallAction: <ThrowOnError extends boolean = false>(options: Options<GetFirewallActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
/**
 * Get all Floating IPs
 * List multiple [Floating IPs](#floating-ips).
 *
 * Use the provided URI parameters to modify the result.
 *
 */
export declare const listFloatingIps: <ThrowOnError extends boolean = false>(options?: Options<ListFloatingIpsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_floating_ips_response, unknown, ThrowOnError>;
/**
 * Create a Floating IP
 * Create a [Floating IP](#floating-ips).
 *
 * Provide the `server` attribute to assign the [Floating IP](#floating-ips) to that server or provide a `home_location` to locate the [Floating IP](#floating-ips) at. Note that the [Floating IP](#floating-ips) can be assigned to a [Server](#servers) in any [Location](#locations) later on. For optimal routing it is advised to use the [Floating IP](#floating-ips) in the same [Location](#locations) it was created in.
 *
 */
export declare const createFloatingIp: <ThrowOnError extends boolean = false>(options?: Options<CreateFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_floating_ip_response, unknown, ThrowOnError>;
/**
 * Delete a Floating IP
 * Deletes a [Floating IP](#floating-ips).
 *
 * If the IP is assigned to a resource it will be unassigned.
 *
 */
export declare const deleteFloatingIp: <ThrowOnError extends boolean = false>(options: Options<DeleteFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get a Floating IP
 * Returns a single [Floating IP](#floating-ips).
 */
export declare const getFloatingIp: <ThrowOnError extends boolean = false>(options: Options<GetFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_floating_ip_response, unknown, ThrowOnError>;
/**
 * Update a Floating IP
 * Update the description or [Labels](#labels) of a [Floating IP](#floating-ips).
 * Note that when updating [Labels](#labels), the [Floating IPs](#floating-ips) current set of [Labels](#labels) will be replaced with the [Labels](#labels) provided with the request. So, for example, if you want to add a new [Label](#labels), you have to provide all existing [Labels](#labels) plus the new [Label](#labels) in the request body.
 */
export declare const replaceFloatingIp: <ThrowOnError extends boolean = false>(options: Options<ReplaceFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_floating_ip_response, unknown, ThrowOnError>;
/**
 * Get all Actions for a Floating IP
 * Lists [Actions](#actions) for a [Floating IP](#floating-ips).
 *
 * Use the provided URI parameters to modify the result.
 *
 */
export declare const listActionsForFloatingIp: <ThrowOnError extends boolean = false>(options: Options<ListActionsForFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_for_floating_ip_response, unknown, ThrowOnError>;
/**
 * Get an Action for a Floating IP
 * Returns a specific [Action](#actions) for a [Floating IP](#floating-ips).
 */
export declare const getActionForFloatingIp: <ThrowOnError extends boolean = false>(options: Options<GetActionForFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_for_floating_ip_response, unknown, ThrowOnError>;
/**
 * Assign a Floating IP to a Server
 * Assigns a [Floating IP](#floating-ips) to a [Server](#servers).
 */
export declare const assignFloatingIpToServer: <ThrowOnError extends boolean = false>(options: Options<AssignFloatingIpToServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").assign_floating_ip_to_server_response, unknown, ThrowOnError>;
/**
 * Change reverse DNS records for a Floating IP
 * Change the reverse DNS records for this [Floating IP](#floating-ips).
 *
 * Allows to modify the PTR records set for the IP address.
 *
 */
export declare const changeReverseDnsRecordsForFloatingIp: <ThrowOnError extends boolean = false>(options: Options<ChangeReverseDnsRecordsForFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_reverse_dns_records_for_floating_ip_response, unknown, ThrowOnError>;
/**
 * Change Floating IP Protection
 * Changes the protection settings configured for the [Floating IP](#floating-ips).
 */
export declare const changeFloatingIpProtection: <ThrowOnError extends boolean = false>(options: Options<ChangeFloatingIpProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_floating_ip_protection_response, unknown, ThrowOnError>;
/**
 * Unassign a Floating IP
 * Unassigns a [Floating IP](#floating-ips).
 *
 * Results in the IP being unreachable. Can be assigned to another resource again.
 *
 */
export declare const unassignFloatingIp: <ThrowOnError extends boolean = false>(options: Options<UnassignFloatingIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").unassign_floating_ip_response, unknown, ThrowOnError>;
/**
 * Get all Actions
 * Lists multiple [Actions](#actions).
 *
 * Use the provided URI parameters to modify the result.
 *
 */
export declare const listFloatingIpActions: <ThrowOnError extends boolean = false>(options?: Options<ListFloatingIpActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a single [Action](#actions).
 */
export declare const getFloatingIpAction: <ThrowOnError extends boolean = false>(options: Options<GetFloatingIpActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
/**
 * Get all Images
 * Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.
 */
export declare const listImages: <ThrowOnError extends boolean = false>(options?: Options<ListImagesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_images_response, unknown, ThrowOnError>;
/**
 * Delete an Image
 * Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.
 */
export declare const deleteImage: <ThrowOnError extends boolean = false>(options: Options<DeleteImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get an Image
 * Returns a specific Image object.
 */
export declare const getImage: <ThrowOnError extends boolean = false>(options: Options<GetImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_image_response, unknown, ThrowOnError>;
/**
 * Update an Image
 * Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.
 *
 * Note that when updating labels, the current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 *
 */
export declare const replaceImage: <ThrowOnError extends boolean = false>(options: Options<ReplaceImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_image_response, unknown, ThrowOnError>;
/**
 * Get all Actions for an Image
 * Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
 */
export declare const listActionsForImage: <ThrowOnError extends boolean = false>(options: Options<ListActionsForImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_for_image_response, unknown, ThrowOnError>;
/**
 * Get an Action for an Image
 * Returns a specific Action for an Image.
 */
export declare const getActionForImage: <ThrowOnError extends boolean = false>(options: Options<GetActionForImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_for_image_response, unknown, ThrowOnError>;
/**
 * Change Image Protection
 * Changes the protection configuration of the Image. Can only be used on snapshots.
 */
export declare const changeImageProtection: <ThrowOnError extends boolean = false>(options: Options<ChangeImageProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_image_protection_response, unknown, ThrowOnError>;
/**
 * Get all Actions
 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.
 */
export declare const listImageActions: <ThrowOnError extends boolean = false>(options?: Options<ListImageActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a specific Action object.
 */
export declare const getImageAction: <ThrowOnError extends boolean = false>(options: Options<GetImageActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
/**
 * Get all ISOs
 * Returns all available ISO objects.
 */
export declare const listIsos: <ThrowOnError extends boolean = false>(options?: Options<ListIsosData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_isos_response, unknown, ThrowOnError>;
/**
 * Get an ISO
 * Returns a specific ISO object.
 */
export declare const getIso: <ThrowOnError extends boolean = false>(options: Options<GetIsoData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_iso_response, unknown, ThrowOnError>;
/**
 * Get all Load Balancer Types
 * Gets all Load Balancer type objects.
 */
export declare const listLoadBalancerTypes: <ThrowOnError extends boolean = false>(options?: Options<ListLoadBalancerTypesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_load_balancer_types_response, unknown, ThrowOnError>;
/**
 * Get a Load Balancer Type
 * Gets a specific Load Balancer type object.
 */
export declare const getLoadBalancerType: <ThrowOnError extends boolean = false>(options: Options<GetLoadBalancerTypeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_load_balancer_type_response, unknown, ThrowOnError>;
/**
 * Get all Load Balancers
 * Gets all existing Load Balancers that you have available.
 */
export declare const listLoadBalancers: <ThrowOnError extends boolean = false>(options?: Options<ListLoadBalancersData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_load_balancers_response, unknown, ThrowOnError>;
/**
 * Create a Load Balancer
 * Creates a Load Balancer.
 *
 * #### Call specific error codes
 *
 * | Code                                    | Description                                                                                           |
 * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
 * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
 * | `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
 * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
 * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
 * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
 * | `source_port_already_used`              | The source port you are trying to add is already in use                                               |
 * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
 *
 */
export declare const createLoadBalancer: <ThrowOnError extends boolean = false>(options?: Options<CreateLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_load_balancer_response, unknown, ThrowOnError>;
/**
 * Delete a Load Balancer
 * Deletes a Load Balancer.
 */
export declare const deleteLoadBalancer: <ThrowOnError extends boolean = false>(options: Options<DeleteLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get a Load Balancer
 * Gets a specific Load Balancer object.
 */
export declare const getLoadBalancer: <ThrowOnError extends boolean = false>(options: Options<GetLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_load_balancer_response, unknown, ThrowOnError>;
/**
 * Update a Load Balancer
 * Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.
 *
 * Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 *
 * Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const replaceLoadBalancer: <ThrowOnError extends boolean = false>(options: Options<ReplaceLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_load_balancer_response, unknown, ThrowOnError>;
/**
 * Get all Actions for a Load Balancer
 * Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
 */
export declare const listActionsForLoadBalancer: <ThrowOnError extends boolean = false>(options: Options<ListActionsForLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_for_load_balancer_response, unknown, ThrowOnError>;
/**
 * Get an Action for a Load Balancer
 * Returns a specific Action for a Load Balancer.
 */
export declare const getActionForLoadBalancer: <ThrowOnError extends boolean = false>(options: Options<GetActionForLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_for_load_balancer_response, unknown, ThrowOnError>;
/**
 * Add Service
 * Adds a service to a Load Balancer.
 *
 * #### Call specific error codes
 *
 * | Code                       | Description                                             |
 * |----------------------------|---------------------------------------------------------|
 * | `source_port_already_used` | The source port you are trying to add is already in use |
 *
 */
export declare const addService: <ThrowOnError extends boolean = false>(options: Options<AddServiceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").add_service_response, unknown, ThrowOnError>;
/**
 * Add Target
 * Adds a target to a Load Balancer.
 *
 * #### Call specific error codes
 *
 * | Code                                    | Description                                                                                           |
 * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
 * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
 * | `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
 * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
 * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
 * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
 * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
 *
 */
export declare const addTarget: <ThrowOnError extends boolean = false>(options: Options<AddTargetData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").add_target_response, unknown, ThrowOnError>;
/**
 * Attach a Load Balancer to a Network
 * Attach a Load Balancer to a Network.
 *
 * **Call specific error codes**
 *
 * | Code                             | Description                                                           |
 * |----------------------------------|-----------------------------------------------------------------------|
 * | `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
 * | `ip_not_available`               | The provided Network IP is not available                              |
 * | `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |
 *
 */
export declare const attachLoadBalancerToNetwork: <ThrowOnError extends boolean = false>(options: Options<AttachLoadBalancerToNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").attach_load_balancer_to_network_response, unknown, ThrowOnError>;
/**
 * Change Algorithm
 * Change the algorithm that determines to which target new requests are sent.
 */
export declare const changeAlgorithm: <ThrowOnError extends boolean = false>(options: Options<ChangeAlgorithmData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_algorithm_response, unknown, ThrowOnError>;
/**
 * Change reverse DNS entry for this Load Balancer
 * Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.
 *
 * Floating IPs assigned to the Server are not affected by this.
 *
 */
export declare const changeReverseDnsEntryForThisLoadBalancer: <ThrowOnError extends boolean = false>(options: Options<ChangeReverseDnsEntryForThisLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_reverse_dns_entry_for_this_load_balancer_response, unknown, ThrowOnError>;
/**
 * Change Load Balancer Protection
 * Changes the protection configuration of a Load Balancer.
 */
export declare const changeLoadBalancerProtection: <ThrowOnError extends boolean = false>(options: Options<ChangeLoadBalancerProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_load_balancer_protection_response, unknown, ThrowOnError>;
/**
 * Change the Type of a Load Balancer
 * Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.
 *
 * **Call specific error codes**
 *
 * | Code                         | Description                                                     |
 * |------------------------------|-----------------------------------------------------------------|
 * | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |
 *
 */
export declare const changeTypeOfLoadBalancer: <ThrowOnError extends boolean = false>(options: Options<ChangeTypeOfLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_type_of_load_balancer_response, unknown, ThrowOnError>;
/**
 * Delete Service
 * Delete a service of a Load Balancer.
 */
export declare const deleteService: <ThrowOnError extends boolean = false>(options: Options<DeleteServiceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").delete_service_response, unknown, ThrowOnError>;
/**
 * Detach a Load Balancer from a Network
 * Detaches a Load Balancer from a network.
 */
export declare const detachLoadBalancerFromNetwork: <ThrowOnError extends boolean = false>(options: Options<DetachLoadBalancerFromNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").detach_load_balancer_from_network_response, unknown, ThrowOnError>;
/**
 * Disable the public interface of a Load Balancer
 * Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.
 *
 * #### Call specific error codes
 *
 * | Code                                      | Description                                                                    |
 * |-------------------------------------------|--------------------------------------------------------------------------------|
 * | `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
 * | `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |
 *
 */
export declare const disablePublicInterfaceOfLoadBalancer: <ThrowOnError extends boolean = false>(options: Options<DisablePublicInterfaceOfLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").disable_public_interface_of_load_balancer_response, unknown, ThrowOnError>;
/**
 * Enable the public interface of a Load Balancer
 * Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.
 */
export declare const enablePublicInterfaceOfLoadBalancer: <ThrowOnError extends boolean = false>(options: Options<EnablePublicInterfaceOfLoadBalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").enable_public_interface_of_load_balancer_response, unknown, ThrowOnError>;
/**
 * Remove Target
 * Removes a target from a Load Balancer.
 */
export declare const removeTarget: <ThrowOnError extends boolean = false>(options: Options<RemoveTargetData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").remove_target_response, unknown, ThrowOnError>;
/**
 * Update Service
 * Updates a Load Balancer Service.
 *
 * #### Call specific error codes
 *
 * | Code                       | Description                                             |
 * |----------------------------|---------------------------------------------------------|
 * | `source_port_already_used` | The source port you are trying to add is already in use |
 *
 */
export declare const updateService: <ThrowOnError extends boolean = false>(options: Options<UpdateServiceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").update_service_response, unknown, ThrowOnError>;
/**
 * Get Metrics for a LoadBalancer
 * You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.
 *
 * Depending on the type you will get different time series data:
 *
 * |Type | Timeseries | Unit | Description |
 * |---- |------------|------|-------------|
 * | open_connections | open_connections | number | Open connections |
 * | connections_per_second | connections_per_second | connections/s | Connections per second |
 * | requests_per_second | requests_per_second | requests/s | Requests per second |
 * | bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
 * || bandwidth.out | bytes/s | Egress bandwidth |
 *
 * Metrics are available for the last 30 days only.
 *
 * If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.
 *
 * We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.
 *
 */
export declare const getMetricsForLoadbalancer: <ThrowOnError extends boolean = false>(options: Options<GetMetricsForLoadbalancerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_metrics_for_loadbalancer_response, unknown, ThrowOnError>;
/**
 * Get all Actions
 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.
 */
export declare const listLoadBalancerActions: <ThrowOnError extends boolean = false>(options?: Options<ListLoadBalancerActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a specific Action object.
 */
export declare const getLoadBalancerAction: <ThrowOnError extends boolean = false>(options: Options<GetLoadBalancerActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
/**
 * Get all Locations
 * Returns all Locations.
 */
export declare const listLocations: <ThrowOnError extends boolean = false>(options?: Options<ListLocationsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_locations_response, unknown, ThrowOnError>;
/**
 * Get a Location
 * Returns a single Location.
 */
export declare const getLocation: <ThrowOnError extends boolean = false>(options: Options<GetLocationData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_location_response, unknown, ThrowOnError>;
/**
 * Get all Networks
 * Gets all existing networks that you have available.
 */
export declare const listNetworks: <ThrowOnError extends boolean = false>(options?: Options<ListNetworksData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_networks_response, unknown, ThrowOnError>;
/**
 * Create a Network
 * Creates a network with the specified `ip_range`.
 *
 * You may specify one or more `subnets`. You can also add more Subnets later by using the [add subnet action](https://docs.hetzner.cloud/#network-actions-add-a-subnet-to-a-network). If you do not specify an `ip_range` in the subnet we will automatically pick the first available /24 range for you.
 *
 * You may specify one or more routes in `routes`. You can also add more routes later by using the [add route action](https://docs.hetzner.cloud/#network-actions-add-a-route-to-a-network).
 *
 */
export declare const createNetwork: <ThrowOnError extends boolean = false>(options?: Options<CreateNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_network_response, unknown, ThrowOnError>;
/**
 * Delete a Network
 * Deletes a network. If there are Servers attached they will be detached in the background.
 *
 * Note: if the network object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const deleteNetwork: <ThrowOnError extends boolean = false>(options: Options<DeleteNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get a Network
 * Gets a specific network object.
 */
export declare const getNetwork: <ThrowOnError extends boolean = false>(options: Options<GetNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_network_response, unknown, ThrowOnError>;
/**
 * Update a Network
 * Updates the network properties.
 *
 * Note that when updating labels, the network’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 *
 * Note: if the network object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const replaceNetwork: <ThrowOnError extends boolean = false>(options: Options<ReplaceNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_network_response, unknown, ThrowOnError>;
/**
 * Get all Actions for a Network
 * Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
 */
export declare const listActionsForNetwork: <ThrowOnError extends boolean = false>(options: Options<ListActionsForNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_for_network_response, unknown, ThrowOnError>;
/**
 * Get an Action for a Network
 * Returns a specific Action for a Network.
 */
export declare const getActionForNetwork: <ThrowOnError extends boolean = false>(options: Options<GetActionForNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_for_network_response, unknown, ThrowOnError>;
/**
 * Add a route to a Network
 * Adds a route entry to a Network.
 *
 * Note: if the Network object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const addRouteToNetwork: <ThrowOnError extends boolean = false>(options: Options<AddRouteToNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").add_route_to_network_response, unknown, ThrowOnError>;
/**
 * Add a subnet to a Network
 * Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.
 *
 * Note: if the parent Network object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const addSubnetToNetwork: <ThrowOnError extends boolean = false>(options: Options<AddSubnetToNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").add_subnet_to_network_response, unknown, ThrowOnError>;
/**
 * Change IP range of a Network
 * Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.
 *
 * For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.
 *
 * After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.
 *
 * Note: if the Network object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const changeIpRangeOfNetwork: <ThrowOnError extends boolean = false>(options: Options<ChangeIpRangeOfNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_ip_range_of_network_response, unknown, ThrowOnError>;
/**
 * Change Network Protection
 * Changes the protection configuration of a Network.
 *
 * Note: if the Network object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const changeNetworkProtection: <ThrowOnError extends boolean = false>(options: Options<ChangeNetworkProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_network_protection_response, unknown, ThrowOnError>;
/**
 * Delete a route from a Network
 * Delete a route entry from a Network.
 *
 * Note: if the Network object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const deleteRouteFromNetwork: <ThrowOnError extends boolean = false>(options: Options<DeleteRouteFromNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").delete_route_from_network_response, unknown, ThrowOnError>;
/**
 * Delete a subnet from a Network
 * Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.
 *
 * Note: if the Network object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const deleteSubnetFromNetwork: <ThrowOnError extends boolean = false>(options: Options<DeleteSubnetFromNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").delete_subnet_from_network_response, unknown, ThrowOnError>;
/**
 * Get all Actions
 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.
 */
export declare const listNetworkActions: <ThrowOnError extends boolean = false>(options?: Options<ListNetworkActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a specific Action object.
 */
export declare const getNetworkAction: <ThrowOnError extends boolean = false>(options: Options<GetNetworkActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
/**
 * Get all PlacementGroups
 * Returns all PlacementGroup objects.
 */
export declare const listPlacementgroups: <ThrowOnError extends boolean = false>(options?: Options<ListPlacementgroupsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_placementgroups_response, unknown, ThrowOnError>;
/**
 * Create a PlacementGroup
 * Creates a new PlacementGroup.
 *
 */
export declare const createPlacementgroup: <ThrowOnError extends boolean = false>(options?: Options<CreatePlacementgroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_placementgroup_response, unknown, ThrowOnError>;
/**
 * Delete a PlacementGroup
 * Deletes a PlacementGroup.
 */
export declare const deletePlacementgroup: <ThrowOnError extends boolean = false>(options: Options<DeletePlacementgroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get a PlacementGroup
 * Gets a specific PlacementGroup object.
 */
export declare const getPlacementgroup: <ThrowOnError extends boolean = false>(options: Options<GetPlacementgroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_placementgroup_response, unknown, ThrowOnError>;
/**
 * Update a PlacementGroup
 * Updates the PlacementGroup properties.
 *
 * Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 *
 * Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const replacePlacementgroup: <ThrowOnError extends boolean = false>(options: Options<ReplacePlacementgroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_placementgroup_response, unknown, ThrowOnError>;
/**
 * Get all prices
 * Returns prices for all resources available on the platform. VAT and currency of the Project owner are used for calculations.
 *
 * Both net and gross prices are included in the response.
 *
 */
export declare const listPrices: <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_prices_response, unknown, ThrowOnError>;
/**
 * Get all Primary IPs
 * Returns all Primary IP objects.
 */
export declare const listPrimaryIps: <ThrowOnError extends boolean = false>(options?: Options<ListPrimaryIpsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_primary_ips_response, unknown, ThrowOnError>;
/**
 * Create a Primary IP
 * Creates a new Primary IP, optionally assigned to a Server.
 *
 * If you want to create a Primary IP that is not assigned to a Server, you need to provide the `datacenter` key instead of `assignee_id`. This can be either the ID or the name of the Datacenter this Primary IP shall be created in.
 *
 * Note that a Primary IP can only be assigned to a Server in the same Datacenter later on.
 *
 * #### Call specific error codes
 *
 * | Code                          | Description                                                   |
 * |------------------------------ |-------------------------------------------------------------- |
 * | `server_not_stopped`          | The specified server is running, but needs to be powered off  |
 * | `server_has_ipv4`             | The server already has an ipv4 address                        |
 * | `server_has_ipv6`             | The server already has an ipv6 address                        |
 *
 */
export declare const createPrimaryIp: <ThrowOnError extends boolean = false>(options?: Options<CreatePrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_primary_ip_response, unknown, ThrowOnError>;
/**
 * Delete a Primary IP
 * Deletes a Primary IP.
 *
 * The Primary IP may be assigned to a Server. In this case it is unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.
 *
 */
export declare const deletePrimaryIp: <ThrowOnError extends boolean = false>(options: Options<DeletePrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get a Primary IP
 * Returns a specific Primary IP object.
 */
export declare const getPrimaryIp: <ThrowOnError extends boolean = false>(options: Options<GetPrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_primary_ip_response, unknown, ThrowOnError>;
/**
 * Update a Primary IP
 * Updates the Primary IP.
 *
 * Note that when updating labels, the Primary IP's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 *
 * If the Primary IP object changes during the request, the response will be a “conflict” error.
 *
 */
export declare const replacePrimaryIp: <ThrowOnError extends boolean = false>(options: Options<ReplacePrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_primary_ip_response, unknown, ThrowOnError>;
/**
 * Assign a Primary IP to a resource
 * Assigns a Primary IP to a Server.
 *
 * A Server can only have one Primary IP of type `ipv4` and one of type `ipv6` assigned. If you need more IPs use Floating IPs.
 *
 * The Server must be powered off (status `off`) in order for this operation to succeed.
 *
 * #### Call specific error codes
 *
 * | Code                          | Description                                                   |
 * |------------------------------ |-------------------------------------------------------------- |
 * | `server_not_stopped`          | The server is running, but needs to be powered off            |
 * | `primary_ip_already_assigned` | Primary ip is already assigned to a different server          |
 * | `server_has_ipv4`             | The server already has an ipv4 address                        |
 * | `server_has_ipv6`             | The server already has an ipv6 address                        |
 *
 */
export declare const assignPrimaryIpToResource: <ThrowOnError extends boolean = false>(options: Options<AssignPrimaryIpToResourceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").assign_primary_ip_to_resource_response, unknown, ThrowOnError>;
/**
 * Change reverse DNS entry for a Primary IP
 * Changes the hostname that will appear when getting the hostname belonging to this Primary IP.
 */
export declare const changeReverseDnsEntryForPrimaryIp: <ThrowOnError extends boolean = false>(options: Options<ChangeReverseDnsEntryForPrimaryIpData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_reverse_dns_entry_for_primary_ip_response, unknown, ThrowOnError>;
/**
 * Change Primary IP Protection
 * Changes the protection configuration of a Primary IP.
 *
 * A Primary IP can only be delete protected if its `auto_delete` property is set to `false`.
 *
 */
export declare const changePrimaryIpProtection: <ThrowOnError extends boolean = false>(options: Options<ChangePrimaryIpProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_primary_ip_protection_response, unknown, ThrowOnError>;
/**
 * Unassign a Primary IP from a resource
 * Unassigns a Primary IP from a Server.
 *
 * The Server must be powered off (status `off`) in order for this operation to succeed.
 *
 * Note that only Servers that have at least one network interface (public or private) attached can be powered on.
 *
 * #### Call specific error codes
 *
 * | Code                              | Description                                                   |
 * |---------------------------------- |-------------------------------------------------------------- |
 * | `server_not_stopped`              | The server is running, but needs to be powered off            |
 * | `server_is_load_balancer_target`  | The server ipv4 address is a loadbalancer target              |
 *
 */
export declare const unassignPrimaryIpFromResource: <ThrowOnError extends boolean = false>(options: Options<UnassignPrimaryIpFromResourceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").unassign_primary_ip_from_resource_response, unknown, ThrowOnError>;
/**
 * Get all Actions
 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.
 */
export declare const listPrimaryIpActions: <ThrowOnError extends boolean = false>(options?: Options<ListPrimaryIpActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a specific Action object.
 */
export declare const getPrimaryIpAction: <ThrowOnError extends boolean = false>(options: Options<GetPrimaryIpActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
/**
 * Get all Server Types
 * Gets all Server type objects.
 */
export declare const listServerTypes: <ThrowOnError extends boolean = false>(options?: Options<ListServerTypesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_server_types_response, unknown, ThrowOnError>;
/**
 * Get a Server Type
 * Gets a specific Server type object.
 */
export declare const getServerType: <ThrowOnError extends boolean = false>(options: Options<GetServerTypeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_server_type_response, unknown, ThrowOnError>;
/**
 * Get all Servers
 * Returns all existing Server objects
 */
export declare const listServers: <ThrowOnError extends boolean = false>(options?: Options<ListServersData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_servers_response, unknown, ThrowOnError>;
/**
 * Create a Server
 * Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.
 */
export declare const createServer: <ThrowOnError extends boolean = false>(options?: Options<CreateServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_server_response, unknown, ThrowOnError>;
/**
 * Delete a Server
 * Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible. Any resources attached to the server (like Volumes, Primary IPs, Floating IPs, Firewalls, Placement Groups) are detached while the server is deleted.
 *
 */
export declare const deleteServer: <ThrowOnError extends boolean = false>(options: Options<DeleteServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").delete_server_response, unknown, ThrowOnError>;
/**
 * Get a Server
 * Returns a specific Server object. The Server must exist inside the Project
 */
export declare const getServer: <ThrowOnError extends boolean = false>(options: Options<GetServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_server_response, unknown, ThrowOnError>;
/**
 * Update a Server
 * Updates a Server. You can update a Server’s name and a Server’s labels.
 * Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
 * Also note that when updating labels, the Server’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 */
export declare const replaceServer: <ThrowOnError extends boolean = false>(options: Options<ReplaceServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_server_response, unknown, ThrowOnError>;
/**
 * Get all Actions for a Server
 * Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
 */
export declare const listActionsForServer: <ThrowOnError extends boolean = false>(options: Options<ListActionsForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_for_server_response, unknown, ThrowOnError>;
/**
 * Get an Action for a Server
 * Returns a specific Action object for a Server.
 */
export declare const getActionForServer: <ThrowOnError extends boolean = false>(options: Options<GetActionForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_for_server_response, unknown, ThrowOnError>;
/**
 * Add a Server to a Placement Group
 * Adds a Server to a Placement Group.
 *
 * Server must be powered off for this command to succeed.
 *
 * #### Call specific error codes
 *
 * | Code                          | Description                                                          |
 * |-------------------------------|----------------------------------------------------------------------|
 * | `server_not_stopped`          | The action requires a stopped server                                 |
 *
 */
export declare const addServerToPlacementGroup: <ThrowOnError extends boolean = false>(options: Options<AddServerToPlacementGroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").add_server_to_placement_group_response, unknown, ThrowOnError>;
/**
 * Attach an ISO to a Server
 * Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.
 *
 * Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.
 *
 */
export declare const attachIsoToServer: <ThrowOnError extends boolean = false>(options: Options<AttachIsoToServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").attach_iso_to_server_response, unknown, ThrowOnError>;
/**
 * Attach a Server to a Network
 * Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.
 *
 * The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.
 *
 * Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.
 *
 * **Call specific error codes**
 *
 * | Code                             | Description                                                           |
 * |----------------------------------|-----------------------------------------------------------------------|
 * | `server_already_attached`        | The server is already attached to the network                         |
 * | `ip_not_available`               | The provided Network IP is not available                              |
 * | `no_subnet_available`            | No Subnet or IP is available for the Server within the network        |
 * | `networks_overlap`               | The network IP range overlaps with one of the server networks         |
 *
 */
export declare const attachServerToNetwork: <ThrowOnError extends boolean = false>(options: Options<AttachServerToNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").attach_server_to_network_response, unknown, ThrowOnError>;
/**
 * Change alias IPs of a Network
 * Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.
 */
export declare const changeAliasIpsOfNetwork: <ThrowOnError extends boolean = false>(options: Options<ChangeAliasIpsOfNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_alias_ips_of_network_response, unknown, ThrowOnError>;
/**
 * Change reverse DNS entry for this Server
 * Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.
 *
 * Floating IPs assigned to the Server are not affected by this.
 *
 */
export declare const changeReverseDnsEntryForThisServer: <ThrowOnError extends boolean = false>(options: Options<ChangeReverseDnsEntryForThisServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_reverse_dns_entry_for_this_server_response, unknown, ThrowOnError>;
/**
 * Change Server Protection
 * Changes the protection configuration of the Server.
 */
export declare const changeServerProtection: <ThrowOnError extends boolean = false>(options: Options<ChangeServerProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_server_protection_response, unknown, ThrowOnError>;
/**
 * Change the Type of a Server
 * Changes the type (Cores, RAM and disk sizes) of a Server.
 *
 * Server must be powered off for this command to succeed.
 *
 * This copies the content of its disk, and starts it again.
 *
 * You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.
 *
 * If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.
 *
 * #### Call specific error codes
 *
 * | Code                          | Description                                                          |
 * |-------------------------------|----------------------------------------------------------------------|
 * | `invalid_server_type`         | The server type does not fit for the given server or is deprecated   |
 * | `server_not_stopped`          | The action requires a stopped server                                 |
 *
 */
export declare const changeTypeOfServer: <ThrowOnError extends boolean = false>(options: Options<ChangeTypeOfServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_type_of_server_response, unknown, ThrowOnError>;
/**
 * Create Image from a Server
 * Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.
 *
 * To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.
 *
 * You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create a `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.
 *
 */
export declare const createImageFromServer: <ThrowOnError extends boolean = false>(options: Options<CreateImageFromServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_image_from_server_response, unknown, ThrowOnError>;
/**
 * Detach a Server from a Network
 * Detaches a Server from a network. The interface for this network will vanish.
 */
export declare const detachServerFromNetwork: <ThrowOnError extends boolean = false>(options: Options<DetachServerFromNetworkData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").detach_server_from_network_response, unknown, ThrowOnError>;
/**
 * Detach an ISO from a Server
 * Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`
 */
export declare const detachIsoFromServer: <ThrowOnError extends boolean = false>(options: Options<DetachIsoFromServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").detach_iso_from_server_response, unknown, ThrowOnError>;
/**
 * Disable Backups for a Server
 * Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.
 *
 * Caution: This immediately removes all existing backups for the Server!
 *
 */
export declare const disableBackupsForServer: <ThrowOnError extends boolean = false>(options: Options<DisableBackupsForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").disable_backups_for_server_response, unknown, ThrowOnError>;
/**
 * Disable Rescue Mode for a Server
 * Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.
 *
 * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
 *
 * Disabling rescue mode will not reboot your Server — you will have to do this yourself.
 *
 */
export declare const disableRescueModeForServer: <ThrowOnError extends boolean = false>(options: Options<DisableRescueModeForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").disable_rescue_mode_for_server_response, unknown, ThrowOnError>;
/**
 * Enable and Configure Backups for a Server
 * Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.
 *
 * Backups are automatically created daily.
 *
 */
export declare const enableAndConfigureBackupsForServer: <ThrowOnError extends boolean = false>(options: Options<EnableAndConfigureBackupsForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").enable_and_configure_backups_for_server_response, unknown, ThrowOnError>;
/**
 * Enable Rescue Mode for a Server
 * Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.
 *
 * In case a Server cannot boot on its own you can use this to access a Server’s disks.
 *
 * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
 *
 * Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.
 *
 */
export declare const enableRescueModeForServer: <ThrowOnError extends boolean = false>(options: Options<EnableRescueModeForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").enable_rescue_mode_for_server_response, unknown, ThrowOnError>;
/**
 * Power off a Server
 * Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.
 */
export declare const powerOffServer: <ThrowOnError extends boolean = false>(options: Options<PowerOffServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").power_off_server_response, unknown, ThrowOnError>;
/**
 * Power on a Server
 * Starts a Server by turning its power on.
 */
export declare const powerOnServer: <ThrowOnError extends boolean = false>(options: Options<PowerOnServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").power_on_server_response, unknown, ThrowOnError>;
/**
 * Soft-reboot a Server
 * Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.
 */
export declare const softRebootServer: <ThrowOnError extends boolean = false>(options: Options<SoftRebootServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").soft_reboot_server_response, unknown, ThrowOnError>;
/**
 * Rebuild a Server from an Image
 * Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server
 *
 * The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.
 *
 * Your Server will automatically be powered off before the rebuild command executes.
 *
 */
export declare const rebuildServerFromImage: <ThrowOnError extends boolean = false>(options: Options<RebuildServerFromImageData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").rebuild_server_from_image_response, unknown, ThrowOnError>;
/**
 * Remove from Placement Group
 * Removes a Server from a Placement Group.
 *
 */
export declare const removeFromPlacementGroup: <ThrowOnError extends boolean = false>(options: Options<RemoveFromPlacementGroupData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").remove_from_placement_group_response, unknown, ThrowOnError>;
/**
 * Request Console for a Server
 * Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.
 */
export declare const requestConsoleForServer: <ThrowOnError extends boolean = false>(options: Options<RequestConsoleForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").request_console_for_server_response, unknown, ThrowOnError>;
/**
 * Reset a Server
 * Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.
 */
export declare const resetServer: <ThrowOnError extends boolean = false>(options: Options<ResetServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").reset_server_response, unknown, ThrowOnError>;
/**
 * Reset root Password of a Server
 * Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.
 *
 * This will generate a new password for this Server and return it.
 *
 * If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.
 *
 */
export declare const resetRootPasswordOfServer: <ThrowOnError extends boolean = false>(options: Options<ResetRootPasswordOfServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").reset_root_password_of_server_response, unknown, ThrowOnError>;
/**
 * Shutdown a Server
 * Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI
 * and react to the request, otherwise the Server will not shut down. Please note that the `action` status in this case
 * only reflects whether the action was sent to the server. It does not mean that the server actually shut down
 * successfully. If you need to ensure that the server is off, use the `poweroff` action
 *
 */
export declare const shutdownServer: <ThrowOnError extends boolean = false>(options: Options<ShutdownServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").shutdown_server_response, unknown, ThrowOnError>;
/**
 * Get Metrics for a Server
 * Get Metrics for specified Server.
 *
 * You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.
 *
 * Depending on the type you will get different time series data
 *
 * | Type    | Timeseries              | Unit      | Description                                          |
 * |---------|-------------------------|-----------|------------------------------------------------------|
 * | cpu     | cpu                     | percent   | Percent CPU usage                                    |
 * | disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
 * |         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
 * |         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
 * |         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
 * | network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
 * |         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
 * |         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
 * |         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |
 *
 * Metrics are available for the last 30 days only.
 *
 * If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.
 *
 * We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.
 *
 */
export declare const getMetricsForServer: <ThrowOnError extends boolean = false>(options: Options<GetMetricsForServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_metrics_for_server_response, unknown, ThrowOnError>;
/**
 * Get all Actions
 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.
 */
export declare const listServerActions: <ThrowOnError extends boolean = false>(options?: Options<ListServerActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a specific Action object.
 */
export declare const getServerAction: <ThrowOnError extends boolean = false>(options: Options<GetServerActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
/**
 * Get all SSH keys
 * Returns all SSH key objects.
 */
export declare const listSshKeys: <ThrowOnError extends boolean = false>(options?: Options<ListSshKeysData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_ssh_keys_response, unknown, ThrowOnError>;
/**
 * Create an SSH key
 * Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.
 */
export declare const createSshKey: <ThrowOnError extends boolean = false>(options?: Options<CreateSshKeyData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_ssh_key_response, unknown, ThrowOnError>;
/**
 * Delete an SSH key
 * Deletes an SSH key. It cannot be used anymore.
 */
export declare const deleteSshKey: <ThrowOnError extends boolean = false>(options: Options<DeleteSshKeyData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get a SSH key
 * Returns a specific SSH key object.
 */
export declare const getSshKey: <ThrowOnError extends boolean = false>(options: Options<GetSshKeyData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_ssh_key_response, unknown, ThrowOnError>;
/**
 * Update an SSH key
 * Updates an SSH key. You can update an SSH key name and an SSH key labels.
 *
 * Please note that when updating labels, the SSH key current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 *
 */
export declare const replaceSshKey: <ThrowOnError extends boolean = false>(options: Options<ReplaceSshKeyData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_ssh_key_response, unknown, ThrowOnError>;
/**
 * Get all Volumes
 * Gets all existing Volumes that you have available.
 */
export declare const listVolumes: <ThrowOnError extends boolean = false>(options?: Options<ListVolumesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_volumes_response, unknown, ThrowOnError>;
/**
 * Create a Volume
 * Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.
 *
 * Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.
 *
 * The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).
 *
 * A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.
 *
 * #### Call specific error codes
 *
 * | Code                                | Description                                         |
 * |-------------------------------------|-----------------------------------------------------|
 * | `no_space_left_in_location`         | There is no volume space left in the given location |
 *
 */
export declare const createVolume: <ThrowOnError extends boolean = false>(options?: Options<CreateVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").create_volume_response, unknown, ThrowOnError>;
/**
 * Delete a Volume
 * Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.
 */
export declare const deleteVolume: <ThrowOnError extends boolean = false>(options: Options<DeleteVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get a Volume
 * Gets a specific Volume object.
 */
export declare const getVolume: <ThrowOnError extends boolean = false>(options: Options<GetVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_volume_response, unknown, ThrowOnError>;
/**
 * Update a Volume
 * Updates the Volume properties.
 *
 * Note that when updating labels, the volume’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
 *
 */
export declare const replaceVolume: <ThrowOnError extends boolean = false>(options: Options<ReplaceVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").replace_volume_response, unknown, ThrowOnError>;
/**
 * Get all Actions for a Volume
 * Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
 */
export declare const listActionsForVolume: <ThrowOnError extends boolean = false>(options: Options<ListActionsForVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_for_volume_response, unknown, ThrowOnError>;
/**
 * Get an Action for a Volume
 * Returns a specific Action for a Volume.
 */
export declare const getActionForVolume: <ThrowOnError extends boolean = false>(options: Options<GetActionForVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_for_volume_response, unknown, ThrowOnError>;
/**
 * Attach Volume to a Server
 * Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.
 */
export declare const attachVolumeToServer: <ThrowOnError extends boolean = false>(options: Options<AttachVolumeToServerData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").attach_volume_to_server_response, unknown, ThrowOnError>;
/**
 * Change Volume Protection
 * Changes the protection configuration of a Volume.
 */
export declare const changeVolumeProtection: <ThrowOnError extends boolean = false>(options: Options<ChangeVolumeProtectionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").change_volume_protection_response, unknown, ThrowOnError>;
/**
 * Detach Volume
 * Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.
 */
export declare const detachVolume: <ThrowOnError extends boolean = false>(options: Options<DetachVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").detach_volume_response, unknown, ThrowOnError>;
/**
 * Resize Volume
 * Changes the size of a Volume. Note that downsizing a Volume is not possible.
 */
export declare const resizeVolume: <ThrowOnError extends boolean = false>(options: Options<ResizeVolumeData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").resize_volume_response, unknown, ThrowOnError>;
/**
 * Get all Actions
 * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.
 */
export declare const listVolumeActions: <ThrowOnError extends boolean = false>(options?: Options<ListVolumeActionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").list_actions_response, unknown, ThrowOnError>;
/**
 * Get an Action
 * Returns a specific Action object.
 */
export declare const getVolumeAction: <ThrowOnError extends boolean = false>(options: Options<GetVolumeActionData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen.js").get_action_response, unknown, ThrowOnError>;
